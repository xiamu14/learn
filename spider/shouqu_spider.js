var cheerio = require('cheerio')
var request = require('superagent')
var fs = require('fs')
// 异步库
var async = require('async')

var url1 = 'https://api.shouqu.me/api_service/api/v1/mark/webList'
var current = new Date()

var data = {
  userId:223558,
  lastupdataTime: current,
  pageNo:1,
  pageSize:1,
  sort:'desc',
  renderType:0
}

var browserMsg={
    "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
};

// 测试连接 mongodb
var mongoose = require('mongoose')
// 导入 Schema
var listSchema = require('./schema.js')
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://192.168.31.205:27017/shouqu')

const col = mongoose.model('list', listSchema)

const data1 = {
    title: '',
    introduct: '',
    url: '',
    channel: 1,
    categorys: [],
    createtime: 0,
    updatetime: 0,
    channelName: '收趣云书签',
    sourceName: '',
    author: '',
    type: 'reprint',
    published: false,
    mark: false
}

function save(data) {
  data1.title = data.title
  data1.url = data.url
  data1.introduct = data.introduct
  data1.sourceName = data.sourceName
  var categorys = data.categorys
  var length = categorys.length
  data1.categorys = []
  for (var i=0; i<length; i++){
    // 这里啊，第二次的时候要清空啊
    data1.categorys.push(categorys[i]['name'])
  }
  data1.createtime = data.createtime
  data1.updatetime = data.updatetime
  data1.author = data.author
  //初始化model
  var insert = new col(data1);
  insert.save(function(err, result){
    if(err){
      console.log(err)
      return false
    }
  })
}

//修改爬虫爬取方式

async.series([
  function(cb){
    request
      .post(url1)
      .set(browserMsg)
      .send(data)
      .end(function(err, res) {
        if(err || !res.ok) {
          console.log(err)
        }else {
          data.pageSize = res.body.data.pageCount
          cb(null, 1)
        }
      })
  }],
  function(err, result) {
    if(err){
      console.log(err)
      return false
    }else{
      request
      .post(url1)
      .set(browserMsg)
      .send(data)
      .end(function(err, res){
        if (err || !res.ok) {
          console.log(err);
        } else {
          var list = res.body.data.list
          var len = list.length
          for( let index = 0; index < len; index ++ ){
            // 用 title，URL 来判断数据库中是否已有该文章类型；之后可能还需要用文章内容来判断是否已经是重复转载的内容
            col.findOne({"title": list[index].title, "url": list[index].url}).exec(function(err, res){
                if(err) {
                  console.log(err)
                  return false
                }
                if(res) {
                  ;
                }else {
                  save(list[index])
                  if(index === (len - 1)){
                    console.log("更新完成～")
                    return true
                  }
                }
            })
          }
        }
      })
    }
  })
