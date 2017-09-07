module.exports = {
    entry:__dirname + '/src/app.js',                     // 唯一打包入口文件
    output: {
      path: __dirname + '/dist',          // 打包后文件存放的地方
      filename: 'app.js'              // 打包后输出文件的文件名
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,                              // 匹配打包文件后缀名的正则
          exclude: /(node_modules|bower_components)/, // 这些文件夹不用打包
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }
