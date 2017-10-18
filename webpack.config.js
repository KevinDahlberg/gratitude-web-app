var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/server/public',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
}
