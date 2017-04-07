const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};