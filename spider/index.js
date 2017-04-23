var cheerio = require('cheerio')
var request = require('superagent')
var fs = require('fs')

var url1 = 'https://api.shouqu.me/api_service/api/v1/mark/webList'
var data = {
  userId:223558,
  lastupdataTime:1492873515827,
  pageNo:1,
  pageSize:30,
  sort:'desc',
  renderType:0
}

var browserMsg={
    "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
};

// 测试连接 mongodb
var mongoose = require('mongoose');
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://192.168.31.205:27017/shouqu');

// 创建schema
const indexSchema = new mongoose.Schema({
    title: String,
    url: String,
    channel: Number,
    channelName: String,
    sourceName: String
});

const col = mongoose.model('col', indexSchema)

const data1 = {
    title: '',
    url: '',
    channel: 1,
    channelName: '收趣云书签',
    sourceName: ''
}

request
  .post(url1)
  .set(browserMsg)
  .send(data)
  .end(function(err, res){
    // console.log(res)
    if (err || !res.ok) {
      console.log(err);
    } else {
      console.log(typeof(res.body))
      var list = res.body.data.list
      for( index in list ){
        console.log(list[index])
        data1.title = list[index].title
        data1.url = list[index].url
        data1.sourceName = list[index].sourceName
        //初始化model
        var insert = new col(data1);
        insert.save(function(err, result){
          if(err){
            console.log(err)
            return false
          }
        })
      }
    }
  })
