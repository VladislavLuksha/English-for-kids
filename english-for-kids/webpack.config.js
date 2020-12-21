const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.join(__dirname, './src/components'),
      constants: path.join(__dirname, './src/constants'),
      model: path.join(__dirname, './src/model'),
      'rendering-machine': path.join(__dirname, './src/rendering-machine'),
    },
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      { test: /\.(sc|sa|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      {
        test: /\.(png|svg|jpeg|gif|jpg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'src/data/image/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({ filename: 'index.css' }),
    new CopyPlugin({
      patterns: [
        { from: './src/data/image', to: './src/data/image/' },
        { from: './src/data/sounds', to: './src/data/sounds/' },
      ],
    }),
  ],
  devServer: {
    contentBase: './src/public',
    port: 3000,
  },
};
