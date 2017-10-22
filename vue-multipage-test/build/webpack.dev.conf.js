var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var argv = require('yargs').argv;

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["common"],
      minChunks: 2,
      // (在提取之前需要至少三个子 chunk 共享这个模块)
    }),
    new FriendlyErrorsPlugin(),
  ]
})

// 添加下面的处理
var entries = utils.getEntries()
// console.log(entries)
let devtools = '';
if(argv.eruda && argv.eruda === 1) {
  devtools = 'eruda';
}
Object.keys(entries).forEach(function (name) {
  // 每个页面生成一个html
  console.log(entries[name])
  var plugin = new HtmlWebpackPlugin({
    // 输出为 模块名称+html
    filename: name + '.html',
    //(模板放置对应的目录中，若用通用模板，则写 ‘index.html’)
    template: entries[name].slice(0, -3) + '.ejs',
    inject: true,
    devtools: devtools,
    // 每个包引入自己的依赖，公共依赖
    chunks: ['common',name],
  });
  module.exports.plugins.push(plugin)
})
