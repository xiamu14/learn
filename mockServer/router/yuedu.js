// import express from 'express';
const express = require('express');
const yueduData = require('../data/yueduData');

const router = express.Router();

router.put('/yuedutask', (req, res) => {
  if (req.id && req.cata) {
    res.json(yueduData.yueduTask)
  } else {
    // 某个错误码验证
    // res.json({
    //   err: 8010,
    //   err_msg: '您尚未绑定微信，去任务中心绑定才可获得奖励！',
    // })
    // 正确反馈
    res.json({
      err: 0,
      err_msg: '',
    })
  }
})


module.exports = router;
