const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ['./src/index.js'],
    output: {
        path: `${path.resolve(__dirname, 'dist')}`,
        assetModuleFilename: "images/[hash][name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /.(htm|html)$/i,
                use: ['html-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/index.html",
            filename: "index.html"
        })
    ]
}
