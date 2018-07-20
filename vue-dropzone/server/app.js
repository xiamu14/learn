// app.js
const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const serve = require("koa-static");
const cors = require('koa2-cors');
const formidable = require('koa-formidable'); // 图片处理
const fs = require('fs'); // 图片路径
const path = require('path'); // 图片路径

// console.log(path.join(__dirname, './static'));
app.use(serve(path.join(__dirname, './static')));  // 设置静态文件

// 新建文件
const mkdir = (dirname, callback) => {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      mkdir(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
      });
    }
  });
};

// 设置 cors-site
app.use(cors({
  origin: (ctx) => {
    if (ctx.url === '/test') {
      return "*"; // 允许来自所有域名请求
    }
    return 'http://localhost:1234'; // 这样就能只允许 http://localhost:8080 这个域名的请求了
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['cache-control', 'x-requested-with', 'custormerheader'],
}));

router.post('/upload/image', async function (ctx, next) {
  const form = formidable.parse(ctx.request);
  function formImage() {
    return new Promise((resolve, reject) => {
      form((opt, { fields, files }) => {
        let url = fields.url;
        let articleId = fields.articleId;
        console.log(fields);
        // 处理多张图片
        let filename = files.file.name;
        console.log(files.file.path);
        let uploadDir = 'static/public/upload/';
        let avatarName = Date.now() + '_' + filename;
        mkdir('static/public/upload', function () {
          fs.renameSync(files.file.path, uploadDir + avatarName); //重命名
          resolve('http://192.168.1.117:9000/public/upload/' + avatarName)
        })
      })
    })
  }
  const url = await formImage();
  ctx.body = { flag: '1', msg: '', data: url } // 路径返回给前端
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9000);
