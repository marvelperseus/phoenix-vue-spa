const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false })
    ]
  },
  devtool: production ? 'source-maps' : 'eval',
  entry: ['./js/app.js', './sass/app.scss'],
  output: {
    path: path.resolve(__dirname, '../priv/static'),
    filename: 'js/app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
                minimize: {
                    safe: true
                }
            }
          },
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        '*.*',
        'css/*.*',
        'images/*.*',
        'js/*.*'
      ],
      {
        root: path.resolve(__dirname, '../priv/static'),
      }
    ),
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, '../priv/static'),
      filename: 'css/app.css',
      publicPath: '/',
    }),
    new CopyWebpackPlugin([{ from: 'static/', to: path.resolve(__dirname, '../priv/static') }])
  ]
});