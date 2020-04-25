const http = require('http')

http.createServer((req, res) => {
  console.log(req.url);
  res.write('aaa')
  res.end()
}).listen(8080)