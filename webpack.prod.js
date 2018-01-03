const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = merge(common, {
  /**
   * Developer tools para realizar el debug
   */
  devtool: 'hidden-source-map',

  /**
   * Opciones que afectan la salida de la compilación
   */
  output: {
    filename: 'lib.min.js'
  },

  /**
   * Plugins adicionales que se compilan en ejecución
   */
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        ie8: false,
        ecma: 8,
        mangle: {
          keep_fnames: true
        },
        compress: {
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: true
        },
        output: {
          comments: false,
          beautify: false
        },
        warnings: false
      }
    }),
    new UnminifiedWebpackPlugin(),
    new ExtractTextPlugin('lib.min.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/g,
      cssProcessor: cssnano
    })
  ]
});
