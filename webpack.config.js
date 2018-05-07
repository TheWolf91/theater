let webpack = require('webpack');

module.exports = {
    devtool: "cheap-module-source-map",
    entry: './src/main.ts',

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
                loader: 'html-loader'
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
                test: /\.(jpg|png|gif)$/,
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