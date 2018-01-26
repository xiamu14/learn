const Koa = require('koa');
const logger = require('./middleware/logger');
const { router } = require('./router');
const app = new Koa();

app.use(logger());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

const port = 9002
app.listen(port);
console.log(`[demo] start-quick is starting at port ${port}`)
