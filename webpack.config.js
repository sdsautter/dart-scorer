module.exports = {
  entry: [
    './app/app.js'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
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