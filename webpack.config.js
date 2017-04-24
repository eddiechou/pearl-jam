const path = require('path')
const SRC_DIR = path.join(__dirname, '/client/src')
const DIST_DIR = path.join(__dirname, '/client/dist')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
    './client/src/index.js'
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: SRC_DIR
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      loaders: ['babel-loader?cacheDirectory=true'],
      include: SRC_DIR
    },
    {
      test: /\.css$/,
      loader: [ 'style-loader', 'css-loader' ]
    }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: DIST_DIR,
    hot: true,
    historyApiFallback: true
  }
}
