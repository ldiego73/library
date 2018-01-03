const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  /**
   * Developer tools para realizar el debug
   */
  devtool: 'source-map',

  /**
   * Opciones que afectan los modulos normales
   * para la compilación y distribución del proyecto
   */
  plugins: [
    new ExtractTextPlugin('lib.css')
  ]
});
