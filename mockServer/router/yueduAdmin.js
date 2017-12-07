const express = require('express');
const yueduAdminData = require('../data/yueduAdminData');

const router = express.Router();

router.get('/user', (req, res) => {
  if(req.query.page){
    res.json(yueduAdminData.userTable);
  }
  if(req.query.u) {
    res.json(yueduAdminData.userDetail);
  }
});
router.get('/count', (req, res) => {
  if(req.query.p) {
    if(req.query.cate === 'list'){
      // 导出数据接口
      res.json(yueduAdminData.channelDataEx);
    } else {
      // 渠道信息显示
      res.json(yueduAdminData.channelData);
    }
  } else {
    // 注册统计信息显示
    res.json(yueduAdminData.accountData);
  }
})
module.exports = router;
