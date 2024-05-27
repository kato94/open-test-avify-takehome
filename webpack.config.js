const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const host = 'localhost';
const port = 8080;

module.exports = () => {
  return import('@unocss/webpack').then(({ default: UnoCSS }) => ({
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    target: 'web',
    entry: {
      app: ['./index.tsx'],
    },
    output: {
      filename: '[name]-[contenthash:6].bundle.js',
      path: path.join(__dirname, './build/www'),
    },
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.([jt])s(x?)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: 'file-loader?name=img/[name]-[contenthash:6].[ext]',
        },
      ],
    },
    plugins: [
      UnoCSS(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        favicon: 'favicon.ico',
      }),
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash:6].css',
        chunkFilename: '[id].css',
      }),
    ],
    optimization: {
      realContentHash: true,
    },
    devServer: {
      port,
      host,
      static: path.resolve(__dirname, 'src'),
    },
  }));
};
