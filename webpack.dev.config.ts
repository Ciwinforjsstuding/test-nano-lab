const { resolve, join } = require("path");
const { Configuration, HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");

const config: typeof Configuration = {
    mode: "development",
    output: {
        publicPath: "/",
        path: resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    entry: {
        main: resolve(__dirname, "./src/index.tsx"),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: [".tsx", ".ts", ".js"],
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        static: join(__dirname, "build"),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true
    },
}

module.exports = config;