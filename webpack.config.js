const Webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const Path = require('path');

const config = {
    mode: 'development',
    entry: './app/sample.js',
    output: {
        path: require('tmp').dirSync({}).name,
        publicPath: '/',
        filename: 'app.js',
        /*devtoolModuleFilenameTemplate: opts => {
            return `webpack://${opts.namespace}/${opts.resourcePath.startsWith('./') ? opts.resourcePath.substr(2) : opts.resourcePath}`;
        },
        devtoolFallbackModuleFilenameTemplate: opts => {
            return `webpack://${opts.namespace}/${opts.resourcePath.startsWith('./') ? opts.resourcePath.substr(2) : opts.resourcePath}?${opts.hash}`;
        },*/
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },

    target: 'web',
    devtool: 'source-map',
    devServer: {
        hot: true,
        static: [
            Path.resolve(__dirname, 'static'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ],
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin(),
        new VueLoaderPlugin(),
    ],
};

module.exports = config;
