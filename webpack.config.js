const webpack = require('webpack');
const path = require('path');
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname + '/src/Countdown.vue'),

    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'vuejs-countdown.js',

        libraryTarget: 'umd',
        library: 'vuejs-countdown',
        umdNamedDefine: true,
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env'],
                            },
                        },
                    },
                },
            },
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: PROD ? true : false,
            sourceMap: PROD ? false : true,
            mangle: PROD ? true: false,
            compress: {
                warnings: PROD ? false: true
            },
        }),
    ],
};
