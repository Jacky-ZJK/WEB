const fs = require('fs')
const path = require('path')
fs.readFile('./04-os module.js', (err, data) => {
  if (err) {
    console.log('读取失败',err);
  } else {
    console.log(data);
  }
})