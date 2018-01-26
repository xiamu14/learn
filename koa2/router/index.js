const Router = require('koa-router');
const { handbook } = require('./musicStory/handbook');
const { member } = require('./musicStory/member');
// 定义父路由 /api/app
let router = new Router();
router.use('/api/app', handbook.routes(), handbook.allowedMethods());
router.use('/api/app', member.routes(), member.allowedMethods());

exports.router = router;
