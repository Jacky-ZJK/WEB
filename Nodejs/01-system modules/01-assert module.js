const assert = require('assert')

function sum (a, b) {
  assert(arguments.length === 2, "参数必须是两个")
  assert(typeof a === 'number', "第一个参数必须是number")
  assert(typeof b === 'number', "第二个参数必须是number")
  
  return a + b
}

console.log(sum(15, 15));
