const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'sidemenu'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src')]
    },
    externals: {
        jquery: 'jQuery'
    },
    optimization: {
        minimize: false
    }
};

