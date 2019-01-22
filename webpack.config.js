var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } }, exclude: /node_modules/ },
      { test: /\.jsx$/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } }, exclude: /node_modules/ },
      { test: /\.ttf$/, loader: 'url-loader', include: path.resolve(__dirname, 'node_modules/react-native-vector-icons') },
    ]
  },
  devServer: {
    port: 4000,
    historyApiFallback: true,
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    }
  }
};