var cheerio = require('cheerio')
var request = require('superagent')
var fs = require('fs')

var url = 'http://api.shouqu.me/api_service/api/v1/mark/webList'
var html = ''

// request.get(url).end((err, res)=>{
//     console.log(handleDB(res.text));
// });

function handleDB(html) {
    var $ = cheerio.load(html)
    var info = $('#info')

    // 获取电影名(成功拿到了)
    var movieName = $('#content>h1>span').filter(function(i, el) {
        return $(this).attr('property') === 'v:itemreviewed';
    }).text();

    // 获取影片导演名
     var directories = '- 导演：' + $('#info span a').filter(function(i,el){
       return $(this).attr('rel') === 'v:directedBy';
     }).text();

     return directories
}

// 测试连接 mongodb
var mongoose = require('mongoose');
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://192.168.31.205:27017/shouqu');

// db.on('error', console.error.bind(console, '连接错误'));
// db.open('once', function(){
//     console.log('连接成功');
// })

// 创建schema
const indexSchema = new mongoose.Schema({
    title: String,
    url: String,
    channel: Number,
    channelName: String,
    sourceName: String
});

const col = mongoose.model('col', indexSchema)

const test2 = {
    title: 'test2',
    url: 'www.baidu.com',
    channel: 1,
    channelName: '收趣云书签',
    sourceName: '推酷'
}

//初始化model
var insert = new col(test2);

//执行插入
insert.save(function(err, result){
  if(err){
    console.log(err);
  }else{
    console.log('insert ok');
  }

  //关闭连接
  // db.close();
});