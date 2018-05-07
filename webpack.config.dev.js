let webpackMerge = require('webpack-merge');
let webpackConfig = require('./webpack.config');

let path = require('path');

module.exports = webpackMerge(webpackConfig, {
    mode: 'development',
    output: {
        path: __dirname + '/public/javascripts',
        filename: 'bundle.js',
        publicPath: '/javascripts/',
        chunkFilename: '[id].chunk.js'
    }
});