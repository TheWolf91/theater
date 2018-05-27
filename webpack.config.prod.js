const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const ngw = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge.smart(commonConfig, {
    entry: {
        'app': './src/main.ts'
    },

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/javascripts/',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new UglifyJsPlugin({
            sourceMap: false,

            uglifyOptions:
                {
                    "mangle": true,
                    "minimize": true
                }

        })
    ]
});