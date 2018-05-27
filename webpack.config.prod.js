const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge.smart(commonConfig, {
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new UglifyJsPlugin({
            sourceMap: false,
            uglifyOptions: {
                minimize: false
            }
        })
    ]
});