const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const root = path.join.bind(path, __dirname)

module.exports = {
  /**
   * El entry point para el bundle
   */
  entry: path.join(__dirname, '/src/lib.js'),

  /**
   * Opciones que afectan para la resolución de los módulos
   */
  resolve: {
    extensions: ['.js'],
    modules: [
      root('library'),
      root('node_modules')
    ]
  },

  /**
   * Opciones que afectan la salida de la compilación
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js',
    library: 'lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  /**
   * Opciones que afectan los modulos normales
   * para la compilación y distribución del proyecto
   */
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', options: { sourceMap: true }
          }, {
            loader: 'sass-loader', options: { sourceMap: true }
          }]
        })
      },
      {
        test: /\.js*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ]
  },

  /**
   * Plugins adicionales que se compilan en ejecución
   */
  plugins: [
    new CleanWebpackPlugin([root('dist')]),
    new ExtractTextPlugin('lib.css'),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
    /*
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/assets'),
      to: 'assets'
    }]),*/
  ]
};
