const Router = require('koa-router');
const { musicStoryData } = require('../../data/musicStory');
// 子路由 member
let member = new Router();
member.post('/member/user/login', async (ctx) => {
  ctx.body = {
    "code": 200,
    "message": "操作成功",
    "data": {
      "profile": {
        "nickname": "夏木",
        "avatar": "https://wx.qlogo.cn/mmopen/vi_32/LtoMoo6lqAW6IJHwYtKL8URdhgMVAiaNj2RGDuN7wlk6iaC2ypd9ILXevFIUadtia1IcuLVLm3fKhR7fIxiackviajw/0",
        "gender": "1",
        "uid": 8
      },
      "sesskey": "yY1Mn4lmqPUbMb0HVErQ9yFJBa0RvEPSnXv9vnvn"
    }
  };
});

exports.member = member;
