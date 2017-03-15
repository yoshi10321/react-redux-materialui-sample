const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        jsx: './src/index.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: 'src/index.html'})],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style!css']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],

        modules: ['node_modules']
    }
}