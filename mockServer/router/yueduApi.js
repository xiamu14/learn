// import express from 'express';
const express = require('express');
const yueduData = require('../data/yueduData');
const statistic = require('../controller/statictis');

const router = express.Router();

router.get('/video', (req, res) => {
  res.json(yueduData.videoData);
});

router.get('/article', (req, res) => {
  res.json(yueduData.articleData);
});

router.get('/gaoxiao', (req, res) => {
  res.json(yueduData.articleData);
});

router.get('/img', (req, res) => {
  setTimeout(() => { // 限速，模拟响应速度
    res.json(yueduData.imageData1);
  }, 0);
});

router.get('/gif', (req, res) => {
  setTimeout(() => { // 限速，模拟响应速度
    res.json(yueduData.imageData1);
  }, 0);
});

router.get('/version', (req, res) => {
  res.json(yueduData.appInfo);
})

router.get('/share', (req, res) => {
  res.json(yueduData.share);
})

router.get('/master', (req, res) => {
  res.json(yueduData.apprentice);
})

router.get('/yuedutask', (req, res) => {
  if (req.id && req.cata) {
    res.json(yueduData.yueduTask)
  } else {
    res.json({
      err: 8010,
      err_msg: '您尚未绑定微信，去任务中心绑定才可获得奖励！',
    })
  }
})

// 获取可编辑配置文件
router.get('/config_mng', (req, res) => {
  if (req.query.config_name === 'ads_data_android') {
    res.json(yueduData.adsDataAndroid);
  }
});

router.post('/statistic', statistic);

module.exports = router;
