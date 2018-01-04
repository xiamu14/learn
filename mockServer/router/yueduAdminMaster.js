const express = require('express');
const yueduAdminData = require('../data/yueduAdminData');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.cate === 'has_disciple') {
    res.json(yueduAdminData.discipleData);
  }
});



module.exports = router;
