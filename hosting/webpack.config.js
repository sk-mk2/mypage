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
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                //exclude: /node_modules/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
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
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: ["url-loader"]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}