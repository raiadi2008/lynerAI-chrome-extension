const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "cheap-module-source-map",
    entry: {
        popup: path.join(__dirname, 'src', 'popups', 'popup.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i
            },
            {
                type: "asset/resource",
                test: /\.(jpg|jpeg|png|woff|woff2|ttf|svg)$/
            }
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src', 'static'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'lyner AI popup',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
}