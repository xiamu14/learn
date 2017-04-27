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
        console.log(data.length)
    }else {
        console.log("没有相关数据！")
    }
    return false
})