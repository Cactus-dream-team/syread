const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const files = {
  cssPath: 'styles/styles.css',
  entry: './client_src/App.js',
  outputPath: './client',
  outputFilename: 'scripts/bundle.js',
  htmlTemplate: './client_src/index.html'
};

module.exports = {
  entry: files.entry,
  output: {
    path: files.outputPath,
    filename: files.outputFilename
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: files.htmlTemplate,
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: { comments: false } }),
    new ExtractTextPlugin(files.cssPath)
  ]
};
