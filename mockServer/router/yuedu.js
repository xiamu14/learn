// import express from 'express';
const express = require('express');
const yueduData = require('../data/yueduData');

const router = express.Router();

router.get('/video', (req, res) => {
  res.json(yueduData.videoData);
});

router.get('/article', (req, res) => {
  res.json(yueduData.articleData);
});

router.get('/img', (req, res) => {
  setTimeout(() => { // 限速，模拟响应速度
    res.json(yueduData.imageData1);
  }, 0);
});

router.get('/share', (req, res) => {
  res.json(yueduData.share);
})

module.exports = router;
