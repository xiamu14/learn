var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var config = {
    entry : path.join(__dirname, 'src', 'main'),
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test : /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            }
        ],
    },
    resolve: {
        alias : {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new BrowserSyncPlugin({
            host: '192.168.31.217',
            port: 3000,
            browser: 'chrome',
            server: { baseDir: ['./'] }
        })
    ]
}

module.exports = config;