let webpackMerge = require('webpack-merge');
let webpackConfig = require('./webpack.config');

let path = require('path');

module.exports = webpackMerge(webpackConfig, {
    entry: './src/main.ts',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
});