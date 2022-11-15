import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const config: webpack.Configuration = {
    mode: 'development',
    // mode: 'production',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    devServer: {
        port: 3000,
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                            // ['@babel/preset-env', {targets: {node: 'current'}}] // jest
                        ]
                    }
                }
            }
        ],
    },
    output: {
        filename: '[name].[fullhash:8].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            favicon: "./src/assets/icons/favicon.png"
        }),
        new CleanWebpackPlugin()
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
}

export default config;