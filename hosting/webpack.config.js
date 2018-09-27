const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports =  {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public')
    },
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, '../public'),
        open: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader' ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
