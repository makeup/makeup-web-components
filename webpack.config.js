const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
        'makeup-switch-element': './docs/makeup-switch-element/index.compiled.js'
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    output: {
        filename: '[name]/index.min.js',
        path: path.resolve(__dirname, './docs')
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name]/[name].css",
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          }
        ]
    }
};
