
'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/entry.js"
    ],
    output: {
        path: './out/',
        filename: 'bundle.js'
    },
    externals: {
        'react': 'React'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "jsx!babel", include: /src/},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.{png|jpg}$/, loader: "url?limit=8192"}
        ]
    }
};
