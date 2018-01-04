const express = require('express');

const yueduRouter = require('./router/yuedu');
const yueduAdminRouter = require('./router/yueduAdmin');
const yueduAdminMaster = require('./router/yueduAdminMaster');
const config = require('./config');
const expressSetup = require('./util').expressSetup;

const app = express();


expressSetup(app);

// 定义 mock 接口前缀
app.use('/yuedu/api', yueduRouter);
app.use('/yuedu/account/admin', yueduAdminRouter);
app.use('/yuedu/master/admin', yueduAdminMaster);

const uri = `http://localhost:${config.port}`;

console.log(`> Mock server listening at ${uri}\n`);

app.listen(config.port);

