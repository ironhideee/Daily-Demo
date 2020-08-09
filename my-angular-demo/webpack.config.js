const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
 
 
module.exports = {
    output: {
        path:path.join(__dirname, '/dist/my-angular-demo'),
        filename: '[name].[chunkhash].js'
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack example",
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
};