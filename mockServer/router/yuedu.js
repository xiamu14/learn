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

router.post('/statistic', statistic);

module.exports = router;
