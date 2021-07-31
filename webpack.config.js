const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'mybundle.js',
        path: path.resolve(__dirname, './dist')
        // publicPath: 'https://via.placeholder.com/'
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
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
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
            }
        ]
    }
}