

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let plugins = [
    new HtmlWebpackPlugin({
        title: 'Vite Wallet'
    }),
];
// [TODO] vendor
let webpackConfig = {
    // devtool: "source-map",
    // mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: 'umd',
        library: 'vitecrypto',
        umdNamedDefine: true
    },
    // module: {
    //     rules: [{
    //         test: /\*\.worker\.js/,
    //         use: [{
    //             loader:'raw-loader'
    //         },{
    //             loader: 'worker-loader',
    //             options: { inline: true }
    //         }]
    //     }]
    // },

    plugins,
    devServer: {
        quiet: false,
        host: '127.0.0.1',
        port: 8089
    }
};

module.exports = webpackConfig;
