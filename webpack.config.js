const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    index:"./src/JS/burger.js"},
  output: {
    path: path.resolve("build"),
    filename: "newindex.js",}

,
plugins: [new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./index.html",
    chunks: ["page"]
  }),
  new HtmlWebpackPlugin({
    filename: "historia2.html",
    template: "./src/historia2.html",
    chunks: ["page"]
  }),
  new HtmlWebpackPlugin({
    filename: "historia3.html",
    template: "./src/historia3.html",
    chunks: ["page"]
  }),
  new HtmlWebpackPlugin({
    filename: "historia4.html",
    template: "./src/histori4.html",
  }),
  new HtmlWebpackPlugin({
    filename: "historia5.html",
    template: "./src/historia5.html",
    chunks: ["page"]
  })],
module: {
  rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },};
