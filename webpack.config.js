const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js&/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            exclude: /node_modules/,
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 8000,
  },
  plugins: [new htmlWebpackPlugin({ template: "./index.html" })],
};
