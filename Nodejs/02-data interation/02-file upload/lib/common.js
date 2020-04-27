const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

exports.sendFile = function (pathname, res, stat) {
  let filePath = path.resolve(`www${pathname}`)
  let rs = fs.createReadStream(filePath)
  let gz = zlib.createGzip()

  res.setHeader('content-encoding', 'gzip')
  res.setHeader('last-modified', stat.mtime.toUTCString())

  rs.on('err', () => {
    res.writeHead(404)
    res.write('read err')
    res.end()
  })

  rs.pipe(gz).pipe(res)
}

Buffer.prototype.split = Buffer.prototype.split || function (str) {
  let arr = []
    let current = 0
    let n = 0
    while ((n = this.indexOf(str, current)) != -1) {
        arr.push(this.slice(current, n))
        current = n + str.length
    }

    arr.push(this.slice(current))

    return arr
}