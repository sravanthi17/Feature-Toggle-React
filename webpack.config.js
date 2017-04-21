const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';

module.exports = {
    entry: './lib/main.jsx',
    devServer: {
        hot: true,
        inline: true,
        port: 3000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(buildDirectory),
        filename: 'app.js',
        publicPath: 'http://localhost:3000/dist',
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'test'),
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css!sass'),
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },

        ],
    },
    plugins: [],
};