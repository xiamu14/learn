const Router = require('koa-router');
const { musicStoryData } = require('../../data/musicStory');

// 子路由 handbook
let handbook = new Router();
handbook.get('/handbook/musician/list', async (ctx) => {
  ctx.body = musicStoryData.musicians;
}).get('/handbook/region/list', async (ctx) => {
  ctx.body = musicStoryData.countries;
}).get('/handbook/audio/list', async (ctx) => {
  ctx.body = musicStoryData.song;
})

exports.handbook = handbook;
