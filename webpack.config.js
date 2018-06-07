'use strict';
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
      app: [
        'react-hot-loader/patch', 
        './client/index.js',
        'jquery', 
        'bootstrap-sass'
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss|.css/,
          exclude: /node_modules/,
          use: [
            "style-loader", // creates style nodes from JS strings 
            "css-loader", // translates CSS into CommonJS
            "sass-loader", // compiles Sass to CSS
            "postcss-loader"
          ],
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: ['raw-loader']
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          exclude: /node_modules/,
          use: ['url-loader?limit=10000&mimetype=application/font-woff']
        },
        {
          test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          exclude: /node_modules/,
          use: ['file-loader']
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss', '.html', 'css']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Promise': 'bluebird',
      }),
      new UglifyJsPlugin(),
    ],
    devServer: {
      contentBase: './client',
      hot: true
    }
  };