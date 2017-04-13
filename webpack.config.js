var path = require('path')
var SRC_DIR = path.join(__dirname, '/client/src')
var DIST_DIR = path.join(__dirname, '/client/dist')
var webpack = require('webpack')

/**
 * devtool: 'eval' shows absolute path for errors, rather than bundle.js / invariant, etc.
 */

module.exports = {
  devtool: 'eval-source-map',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: DIST_DIR,
    devtoolModuleFilenameTemplate: SRC_DIR
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        include: SRC_DIR,
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
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true
  }
}
