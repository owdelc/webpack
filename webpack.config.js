const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {"./src/JS/burger.js",
    page: " ./index.html"
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),}

};
plugins: [new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()
  new HtmlWebpackPlugin({
    template: "./index.html"
  })],
module: {
  rules: [
    {
      test: /\.css/,
      use: [MiniCssExtractPlugin.loader,"css-loader"],
    },
  ],
};
