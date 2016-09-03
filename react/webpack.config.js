
'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        "./app/entry.js"
    ],
    output: {
        path: './build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loader: "jsx-loader?harmony"},
            {test: /\.css$/, loader:"style-loader!css-loader"},
            {test: /\.(jpg|png)$/, loader: "url-loader"}
        ]
    }
};
