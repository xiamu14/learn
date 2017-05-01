const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = new Schema({
    title: String,                     // 文章标题
    introduct: String,                 // 文章介绍
    article_markdown: String,          // 文章正文【格式：markdown】
    sourceUrl: String,                 // 文章原始地址
    channel: Number,                   // 文章爬取来源标示【可能无用】
    categorys: Array,                  // 标签
    createtime: Number,                // 创建时间【可能无用】
    updatetime: Number,                // 更新时间【可能无用】
    channelName: String,               // 爬取来源名称
    sourceName: String,                // 文章来源
    author: String,                    // 文章作者
    type: String,                      // 文章类别【original ,reprint】
    published: Boolean,                // 是否发布
    mark: Boolean,                     // 是否添加标注
    push_day: String                   // 发布日期
})
