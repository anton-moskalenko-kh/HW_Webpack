const HtmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: [
            path.join(__dirname, "./src/js/index.js"),
            path.join(__dirname, "./src/scss/style.scss"),
        ]
    },
    devtool: "inline-source-map",
    output: {
        filename: "index.min.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./index.html"}),
        new miniCssExtractPlugin()
    ]
}