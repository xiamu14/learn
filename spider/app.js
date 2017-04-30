var express = require('express')
var app = express()


// 异步库
var async = require('async')

// markdown parser
var  markdownIt = require('markdown-it')
var md = require('turpan')
// var md = new markdownIt()

// 测试连接 mongodb
const mongoose = require('mongoose')
// 导入 Schema
const listSchema = require('./schema.js')
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://192.168.31.205:27017/shouqu')

const col = mongoose.model('list', listSchema)

// 设置前端引擎
app.set('view engine', 'pug')
// 获取列表首页
app.get('/', function(req, res) {

    async.waterfall([function(cb){
        col.find({"sourceName": "简书"}).limit(5).exec(function(err, res){
            cb(null, res)
        })
    }], function(err, result) {
        var rs1 = md.render(result[1].article_markdown)
        res.render('index', { title: 'Hey', message: 'hello ben', rs1: rs1})
    })
})
// 获取频道1-简书的文章内容
app.get('/article/channel/1/', function(req, res) {
    res.send('这里返回文章具体内容')
})

// 启动服务
var server = app.listen(3000, function() {
    var host = server.address().host
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})