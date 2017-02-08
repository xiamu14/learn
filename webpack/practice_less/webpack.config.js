var path = require('path');
var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractText('./src/[name].less')
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractText.extract('style','css?minimize!less')
            }
        ]
    }
}
