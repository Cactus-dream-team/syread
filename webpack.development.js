const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const files = {
  entry: './client_src/App.js',
  outputPath: './client',
  outputFilename: 'scripts/bundle.js',
  htmlTemplate: './client_src/index.html'
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    files.entry
  ],
  output: {
    path: path.resolve(files.outputPath),
    publicPath: "/",
    filename: files.outputFilename
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: files.htmlTemplate }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
