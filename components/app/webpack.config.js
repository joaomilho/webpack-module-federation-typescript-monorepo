const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
  },
  output: {
    publicPath: "http://localhost:3003/",
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
    new ModuleFederationPlugin({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        like_button: "like_button@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
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
