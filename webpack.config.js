let webpack = require('webpack');

module.exports = {
    devtool: "cheap-module-source-map",

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [

            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },

            {
                test: /\.css$/,
                loaders: ['to-string-loader','style-loader', 'css-loader']

            },

            {
                test: /\.(ttf|eot|woff|woff2|svg|otf)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]",
                    },
                },
            },

            {
                test: /\.(jpg|png|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]"
                    }
                }
            }
        ]
    }
};