
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
      shared: path.resolve(__dirname, 'src/shared/'),
      screens: path.resolve(__dirname, 'src/screens/'),
    }
  }
};