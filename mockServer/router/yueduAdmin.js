const express = require('express');
const yueduAdminData = require('../data/yueduAdminData');

const router = express.Router();

router.get('/user', (req, res) => {
  res.json(yueduAdminData.userTable);
});

module.exports = router;
