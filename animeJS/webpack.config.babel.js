import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

export default {
  entry: { index: path.resolve(__dirname, "./src/index.js") },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
};
