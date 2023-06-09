const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/menu.js',
    home: './src/home.js',
    contact: './src/contact.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      template: './src/index.ejs'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};