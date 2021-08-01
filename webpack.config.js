const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'mybundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        // publicPath: 'https://via.placeholder.com/'
        publicPath: ''
    },
    mode: 'none',
    module: {
        rules: [
            // {
            //     test: /\.(ttf)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/inline'
            // },
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset'
            // },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // to increase the max file size to be inline assert 3kb

                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader', 'css-loader'
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'style-loader', 'css-loader', 'sass-loader'
            //     ]
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }

                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }

        ]
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css', // specify the bundle file name for the css
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'testing the handlebars',
            // filename: 'subfolder/custom_filename.html',
            // meta: {
            //     description: 'Some description'
            // },
            description: 'Some description',
            template: 'src/index.hbs',
            inject: 'body'
        })
    ]
}