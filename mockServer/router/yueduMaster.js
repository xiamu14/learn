const express = require('express');
const yueduAdminData = require('../data/yueduAdminData');
const yueduTask = require('../data/yueduTask');

const router = express.Router();

router.get('/admin', (req, res) => {
  if (req.query.cate === 'has_disciple') {
    res.json(yueduAdminData.discipleData);
  }
});

router.get('/task', (req, res) => {
  console.log(req.query);
  if (req.query.task_id === '20007') {
    res.json(yueduTask.springfestival);
  } else {
    res.json({err: 404});
  }
});

module.exports = router;
