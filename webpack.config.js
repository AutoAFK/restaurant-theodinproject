import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.js",
  experiments: {
    outputModule: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
    module: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/templates/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
