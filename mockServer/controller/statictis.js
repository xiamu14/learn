const config = require('../config');
const redis = require('redis');
const express = require('express');

const router = express.Router();

const client = redis.createClient();

module.exports = (req, res) => {
  const data = JSON.stringify(req.body);
  client.set('test', data, () => {
    res.json({
      err: 0,
      reply: data,
      msg: '统计数据已存储到 redis'
    });
  });
}
