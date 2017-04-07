const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
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
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};