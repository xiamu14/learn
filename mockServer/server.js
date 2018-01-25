const express = require('express');

const yueduRouter = require('./router/yuedu');
const yueduApiRouter = require('./router/yueduApi');
const yueduAdminRouter = require('./router/yueduAdmin');
const yueduMasterRouter = require('./router/yueduMaster');
const config = require('./config');
const expressSetup = require('./util').expressSetup;

const app = express();


expressSetup(app);

// 定义 mock 接口前缀
app.use('/yuedu', yueduRouter);
app.use('/yuedu/api', yueduApiRouter);
app.use('/yuedu/account/admin', yueduAdminRouter);
app.use('/yuedu/master', yueduMasterRouter);

const uri = `http://localhost:${config.port}`;

console.log(`> Mock server listening at ${uri}\n`);

app.listen(config.port);

