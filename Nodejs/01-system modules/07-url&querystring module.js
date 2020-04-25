const url = require('url')
const querystring = require('querystring')

let str1 = "https://www.baidu.com:8080?a=12&b='asd'"

console.log(url.parse(str1, true));

let str2 = "a=12&b='asd'"

console.log(querystring.parse(str2));

