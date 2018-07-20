const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  entry: [
    './app/app.js'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),      
    new ManifestPlugin(),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'dart-score',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: '/public/index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    ),
    new MinifyPlugin()
  ],
  output: {
    path: __dirname,
    publicPath: './public/',
    filename: 'public/assets/javascript/bundle.js'
  },
  module: {
    loaders: [{
      include: /app/,

      //   exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};