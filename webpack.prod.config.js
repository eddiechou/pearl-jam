const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
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
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
