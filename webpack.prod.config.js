const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: ' cheap-module-eval-source-map ',
  entry: `${path.join(__dirname, '/client/src')}/index.js`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader?cacheDirectory=true'
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
