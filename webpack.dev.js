const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  /**
   * Developer tools para realizar el debug
   */
  devtool: 'inline-source-map',
});
