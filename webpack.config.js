

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// let plugins = [
//     new HtmlWebpackPlugin({
//         title: 'Vite Wallet'
//     }),
// ];
// [TODO] vendor
let webpackConfig = {
    devtool: "source-map",
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [{
            test: /\*\.worker\.js/,
            use: [{
                loader: 'worker-loader',
                options: { inline: true }
            }]
        }]
    }

    // plugins,
    // devServer: {
    //     quiet: false,
    //     host: '127.0.0.1',
    //     port: 8089
    // }
};

module.exports = webpackConfig;
