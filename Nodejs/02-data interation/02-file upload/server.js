const os = require('os')
const fs = require('fs')
const url = require('url')
const http = require('http')
const uuid = require('uuid')
const crypto = require('crypto')
const cluster = require('cluster')
const common = require('./lib/common')
const querystring = require('querystring')

if (cluster.isMaster) {
  //获取cpu个数
  let cups = os.cpus()

  //创建子进程
  for (let i = 0; i < cups.length; i++) {
    cluster.fork()
  }
} else {
  http.createServer((req, res) => {
    //解析路径和查询参数
    let {pathname, query} = url.parse(req.url, true)
    console.log(pathname);
    
    let arr = []
    req.on('data', data => {
      arr.push(data)
    })
  
    req.on('end', () => {
      //储存分析后的数据
      let post = null
      //数据接收完后进行合并
      let binary = Buffer.concat(arr)

      let disposition = null
      let content = null

      if (req.headers['content-type']) {
        if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
          post = querystring.parse(binary.toString())
        } else if (req.headers['content-type'].indexOf('multipart/form-data') !== -1) {
          let boundary = '--' + req.headers["content-type"].split('; ')[1].split('=')[1]
          if (boundary) {
            post = {}
            let binaryArr = binary.split(boundary)
            binaryArr = binaryArr.slice(1, binaryArr.length - 1)
            binaryArr = binaryArr.map(buffer => buffer.slice(2, buffer.length - 2))
            //Content-Disposition: form-data; name="username" /r/n/r/n qwe
            binaryArr.map(buffer => {
              let n = buffer.indexOf('\r\n\r\n')
              disposition = buffer.slice(0, n)
              content = buffer.slice(n + 4)

              if (disposition.indexOf('\r\n') === -1) {
                //普通数据
                let name = disposition.split('; ')[1].split('=')[1]
                name = name.slice(1, name.length - 1).toString()
                post[name] = content.toString()
              } else {
                //文件数据
                let file = {}
                let [line1, line2] = disposition.split('\r\n')
                console.log(disposition.toString());
                //line1: Content-Disposition: form-data; name="file"; filename="f1.txt"
                //line2: Content-Type: text/plain
                let [, name, filename] = line1.split('; ')
                name = name.split('=')[1]
                name = name.slice(1, name.length - 1).toString()

                filename = filename.split('=')[1]
                filename = filename.slice(1, filename.length - 1).toString()

                let type = line2.split(': ')[1].toString()

                file.name = name
                file.filename = filename
                file.type = type
                post.file = file
              }
            })
          }
        }
      }

      switch (pathname) {
        case '/upload':
          let path = uuid.v4().replace(/\-/g, '')
          fs.writeFile(`upload/${post.file.filename}.${path}`, content, err => {
            if (err) {
              res.writeHead(404)
              res.write('write err')
              res.end()
            } else {
              res.write('write success')
              res.end()
            }
          })
          break

        default: 
          fs.stat(`www${pathname}`, (err, stat) => {
            if (err) {
              res.writeHead(404)
              res.write('Not Found')
              res.end()
            } else {
              //缓存处理
              if (req.headers['if-modified-since']) {
                let oDate = new Date(req.headers['if-modified-since'])
                let time_client = Math.floor(oDate.getTime() / 1000)
                let time_server = Math.floor(stat.mtime.getTime() / 1000)

                //对比服务器时间和客户端时间
                if (time_client < time_server) {
                  common.sendFile(pathname, res, stat)
                } else {
                  res.writeHead(304)
                  res.write('Not modified')
                  res.end()
                }
              } else {
                common.sendFile(pathname, res, stat)
              }
            }
          })
      }
    })
  }).listen(8080, 'localhost', () => {
    console.log('Server is running')
  })
}