var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
    resolve: {
        alias: {}
    },
    entry: {
        main: './app/main.js',
        about: './app/about.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader:'style-loader'
                }, 
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }
            ]
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: '192.168.31.217',
            port: 3000,
            browser: 'chrome',
            server: { baseDir: ['./build'] }
        })
    ]
}

module.exports = config;
