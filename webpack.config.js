const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const solclientjs = path.resolve(
  __dirname,
  "node_modules/solclientjs/lib/solclientjs.js"
);


module.exports = {
  mode: "development",

  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },

  resolve: {
    // alias: {
    //   solclientjs$: solclientjs,
    // },
  },
//   module: {
//     rules: [
//       {
//         test: require.resolve(solclientjs),
//         use: "exports-loader?window.solace",
//       },
//     ],
//   },

  plugins: [new HtmlWebpackPlugin()],
};
