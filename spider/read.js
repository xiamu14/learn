var cheerio = require('cheerio')
var request = require('superagent')
var fs = require('fs')
var toMarkdown = require('to-markdown')

// 爬虫 browser 设置
var browserMsg={
    "User-Agent":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36",
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
};
// 测试连接 mongodb
const mongoose = require('mongoose')
// 导入 Schema
const listSchema = require('./schema.js')
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://192.168.31.205:27017/shouqu')

const col = mongoose.model('list', listSchema)

col.find({"sourceName": "简书"}, (err, data)=>{
    if(err) {
        console.log('err:', err)
    }else if(data){
        var len = data.length
        for(let i = 0; i < len; i++){
            request
                .get(data[i].url)
                .set(browserMsg)
                .end(function(err, res){
                    if (err || !res.ok) {
                        console.log(err)
                    } else {
                        var $ = cheerio.load(res.text)
                        var name = $('.info .name a').text()
                        var articleMD = toMarkdown($('.show-content').html(), {
                            converters: [{
                                filter: function(node) {
                                    return node.nodeName === 'DIV' && /image-package/i.test(node.className)
                                },
                                replacement: function(content) {
                                    return content
                                }
                            }]
                        })
                        data[i].article_markdown = articleMD
                        data[i].author = name
                        data[i].save(function(err, updatedData){
                            if (err) return handleError(err)
                            console.log('成功！')
                        })
                    }
                })
        }
    }else {
        console.log("没有相关数据！")
    }
    return false
})