const express = require('express');

async function run() {
  const app = express();
  app.get('*', (req, res) => {  // 这个回调函数不需要使用 async 修饰
    throw new Error('test');
    res.send('hello, world!');
  });
  app.listen(3000);
  console.log('App listening');
}

run().catch(error => console.error(error.stack));
