const express = require('express');
const yueduAdminData = require('../data/yueduAdminData');

const router = express.Router();

router.get('/user', (req, res) => {
  if(req.query.page){
    res.json(yueduAdminData.userTable);
  }
  if(req.query.i){
    res.json(yueduAdminData.userTable);
  }
  if(req.query.u) {
    res.json(yueduAdminData.userDetail);
  }
  if(req.query.cate === 'money_all') {
    res.json(yueduAdminData.userMoneyAll);
  }
  if (req.query.cate === 'withdraw_date') {
    res.json(yueduAdminData.userWithdrawDate);
  }
  if (req.query.cate === 'login_info') {
    res.json(yueduAdminData.loginInfoData);
  }
  if (req.query.cate === 'today_redpacket_count') {
    res.json(yueduAdminData.redPacketCount);
  }
});
router.post('/user', (req, res) => {
  if (req.query.cate === 'withdraw_reject') {
    res.json({
      err: 0,
      msg: '已退还'
    })
  }
  if (req.query.cate === 'withdraw_accept') {
    res.json({
      err: 0,
      msg: '已提现'
    })
  }
})
router.get('/count', (req, res) => {
  if(req.query.p && req.query.cate === 'list'){
    // 导出数据接口
    // res.json(yueduAdminData.channelData);
    res.json(yueduAdminData.channelDataEx);
  }
  if (req.query.p) {
    res.json(yueduAdminData.channelData);
  }
  if (req.query.cate === 'list') {
    // 新增用户注册数据
    res.json(yueduAdminData.newUserData);
  }
  if (!req.query.p && !req.query.cate) {
    res.json(yueduAdminData.accountData);
  }
})
module.exports = router;
