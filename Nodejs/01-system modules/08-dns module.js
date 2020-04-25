const dns = require('dns')

dns.resolve('baidu.com', (err, addresses) => {
  if (err) {
    console.log('解析失败');
  } else {
    console.log(addresses);
  }
})