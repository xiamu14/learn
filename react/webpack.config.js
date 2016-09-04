
'use strict';

var webpack = require('webpack');    // 还是 es5 的写法

module.exports = {                   // webpack 的配置项写在这里面
    entry: [
        './app/entry.js'             // 项目的入口文件，可以有多个！！！
    ],
    output: {
        path: './build/',           // 最终输出文件路径
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony'},
            {test: /\.css$/, loader:'style-loader!css-loader'},
            {test: /\.(jpg|png)$/, loader: 'url?limit=10000'}
        ]
    }
};
