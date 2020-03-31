const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        'makeup-switch-class': './docs/makeup-switch-class/index.compiled.js',
        'makeup-switch-element': './docs/makeup-switch-element/index.compiled.js'
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    output: {
        filename: '[name]/index.min.js',
        path: path.resolve(__dirname, './docs')
    }
};
