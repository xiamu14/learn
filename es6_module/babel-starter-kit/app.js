var Greeting = require('./dist/index.js').Greeting
var greeting = new Greeting("你好！")
console.log(greeting.hello())
