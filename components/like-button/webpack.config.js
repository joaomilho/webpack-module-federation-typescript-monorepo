const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new ModuleFederationPlugin({
      name: "like_button",
      filename: "remoteEntry.js",
      exposes: {
        "./LikeButton": "./LikeButton",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],
};

// const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const pkg = require("./package.json");

// module.exports = {
//   entry: path.resolve("src/index.ts"),
//   output: {
//     path: path.join(__dirname, "build"),
//     filename: "index.js",
//     library: pkg.name,
//     libraryTarget: "umd",
//     umdNamedDefine: true,
//   },
//   resolve: {
//     alias: {
//       src: path.resolve("src"),
//     },
//     extensions: [".ts", ".tsx", ".js", ".jsx"],
//   },
//   externals: {
//     react: "react",
//     "react-dom": "react-dom",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: "ts-loader",
//         exclude: /node_modules/,
//         options: {
//           configFile: "tsconfig.npm.json",
//         },
//       },
//     ],
//   },
//   plugins: [new CleanWebpackPlugin()],
// };
