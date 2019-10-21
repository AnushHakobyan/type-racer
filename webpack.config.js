const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});


module.exports = {
    entry: './src/index.js',
    devServer: {
        historyApiFallback: true,
        contentBase: [path.resolve(__dirname, 'dist')],
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules',
        ],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/i,
                exclude: /components/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/i,
                include: /components/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: 'url-loader',
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    },
                ],
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
    ]
    
};
