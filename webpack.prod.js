const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeJsPlugin = require('optimize-js-plugin');

module.exports = merge(common, {
  /**
   * Developer tools para realizar el debug
   */
  devtool: 'hidden-source-map',

  /**
   * Plugins adicionales que se compilan en ejecución
   */
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      },
      comments: false
    })
  ]
});
