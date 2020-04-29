const http = require('http')
const io = require('socket.io')
const fs = require('fs')

let server = http.createServer((req, res) => {

}).listen(8080, 'localhost', () => {
  console.log('Server is runnning')
})

let wssocket = io.listen(server)
wssocket.on('connection', sock => {
  setInterval(() => {
    sock.emit('time', new Date().getTime())
  }, 1000)
})