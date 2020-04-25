const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

let users = {}

http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url)
  
  let body = []
  req.on('data', data => {
    body.push(data)
  })

  req.on('end', () => {
    let {user, psw} = querystring.parse(body.toString())

    switch (pathname) {
      case '/login':
        if (users[user] === psw) {
          res.write('success')
        } else {
          res.writeHead(301, {'Location': 'http://localhost:8080/login.html'});
        }
        res.end()
        break
      case '/register':
        if (!users[user]) {
          users[user] = psw
        }
        res.writeHead(301, {'Location': 'http://localhost:8080/login.html'});
        res.statusCode = 302
        res.end()
        break
      default: 
        fs.readFile(`www${pathname}`, (err, data) => {
          if (err) {
            res.writeHead(404)
            res.write('Not Found!')
          } else {
            res.write(data)
          }

          res.end()
        })
    }
    
  })

}).listen(8080)