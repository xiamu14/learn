// const fs = require('fs');

// const rs = fs.createReadStream('test.md', {highWaterMark: 12});
// let data = '';

// rs.on('data', (chunk) => {
//   data += chunk;
// });
// rs.on('end', () => {
//   console.log(data);
// });

// 测试 buffer 性能
const http = require('http');
let helloWorld = '';
for (let i = 0; i < 1024 * 10; i ++) {
  helloWorld += 'a';
}

helloWorld = new Buffer(helloWorld);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(helloWorld);
}).listen(8001);
