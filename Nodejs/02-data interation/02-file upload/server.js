const os = require('os')
const fs = require('fs')
const url = require('url')
const path = require('path')
const http = require('http')
const crypto = require('crypto')
const cluster = require('cluster')
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
  
    let arr = []
    req.on('data', data => {
      arr.push(data)
    })
  
    req.on('end', () => {
      let  = Buffer.concat(arr)
    })
  }).listen(8080, 'localhost', () => {
    console.log('Server is running')
  })
}