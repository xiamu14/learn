var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

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
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true,
    //   chunks: ['app']
    // }),
    new FriendlyErrorsPlugin()
  ]
})

// 添加下面的处理
var entries = utils.getEntries()
console.log(entries)
Object.keys(entries).forEach(function (name) {
  // 每个页面生成一个html
  console.log(entries[name])
  var plugin = new HtmlWebpackPlugin({
    // 输出为 模块名称+html
    filename: name + '.html',
    //(模板放置对应的目录中，若用通用模板，则写 ‘index.html’)
    template: entries[name].slice(0, -3) + '.html',
    inject: true,
    // 每个包引入自己的依赖，公共依赖
    chunks: ['manifest', 'vendor', name],
  });
  module.exports.plugins.push(plugin)
})
