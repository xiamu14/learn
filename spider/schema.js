const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = new Schema({
    title: String,
    introduct: String,
    article_markdown: String,
    url: String,
    channel: Number,
    categorys: Array,
    createtime: Number,
    updatetime: Number,
    channelName: String,
    sourceName: String,
    author: String
})
