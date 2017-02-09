var path = require('path');
var webpack = require('webpack');
var react_dir = path.resolve(__dirname, './node_modules/react/dist/react.min.js');
var react_dom_dir = path.resolve(__dirname, './node_modules/react-dom/dist/react-dom.min.js');

const config = {
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path))
    },
    resolve: {
        alias: {}
    },
    entry: {
        app: ['./app/main.js'],
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            options: {
                sourceMap: true,
                minimize: true
            }
        }]
    }
}
// config.addVendor('react', react_dir);
// config.addVendor('react-dom', react_dom_dir);

module.exports = config;
