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
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: files.htmlTemplate }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
