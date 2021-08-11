const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
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
        }),
        new MiniCssExtractPlugin()
    ]
}
