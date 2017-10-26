const bodyParser = require('body-parser');

exports.expressSetup = function(app) {
  // mock api
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // 设置跨域访问
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
}
