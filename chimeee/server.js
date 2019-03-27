'use strict';

const Hapi = require('hapi');
const path = require('path')
const Inert = require("inert");

const server = Hapi.server({
  port: 9000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'dist')
    }
  }
});

const init = async () => {

  await server.register(Inert);

  server.route([{
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true,
      }
    }
  }, {
    method: "GET",
    path: '/test/{param*}',
    handler: async (request, h) => {
     await new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve()
       }, 10000);
     })
    return '测试';
    }
  }]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init()

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});
