var path = require('path');
var webpack = require('webpack');

const config = {
    resolve: {
        alias: {}
    },
    entry: {
        main: '../static/src/js/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../static/dest/js/'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['../../../gulp/node_modules/babel-preset-es2015']  // 这个设置不符合常理啊！！！
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

module.exports = config;
