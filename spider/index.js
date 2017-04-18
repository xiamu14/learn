var cheerio = require('cheerio')
var request = require('superagent')
var fs = require('fs')

var url = 'https://movie.douban.com/subject/26260853/?from=showing'
var html = ''

request.get(url).end((err, res)=>{
    console.log(handleDB(res.text));
});

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
