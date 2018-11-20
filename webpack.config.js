

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
let plugins = [
];
const target = process.env.vtarget || "lib";
if (target === 'use') {
    plugins.push(new HtmlWebpackPlugin({
        title: 'Vite Wallet'
    }))
}
// [TODO] vendor
let webpackConfig = {
    // devtool: "source-map",
    // mode: 'development',
    entry: {
        index: target === 'lib' ? './src/index.js' : './src/as.js'
    },
    output: {
        path: path.resolve(__dirname, target === 'lib' ? "./dist" : "fff"),
        libraryTarget: 'umd',
        library: {
            root: "vitecrypto",
            amd: "vitecrypto",
            commonjs: "vitecrypto"
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            // {
            //     test: /\*\.worker\.js/,
            //     use: [{
            //         loader: 'worker-loader',
            //         options: {"inline":true,"fallback":false}
            //     }]
            // }
        ]
    },

    plugins,
    devServer: {
        quiet: false,
        host: '127.0.0.1',
        port: 8089
    }
};

module.exports = webpackConfig;
