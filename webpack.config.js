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
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader', 
              query: {
                presets: ["es2015", "es2016", "react"]
              }
            }
          ],
        },
        {
          test: /\.scss|.css/,
          exclude: /node_modules/,
          use: [
            {loader: "style-loader"}, // creates style nodes from JS strings 
            {loader: "css-loader"}, // translates CSS into CommonJS
            {loader: "sass-loader"}, // compiles Sass to CSS
            {loader: "postcss-loader", options: { importLoaders: 1 }}
          ]
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
      historyApiFallback: true,
      contentBase: './client',
      hot: true
    }
  };