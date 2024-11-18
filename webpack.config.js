const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'img/[hash][ext][query]', // Путь для изображений
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i, // Добавляем поддержку форматов изображений
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i, // Поддержка различных форматов шрифтов
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]', // Папка для шрифтов в dist
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false,
        }),
    ],
    devServer: {
        static: './dist',
        open: true,
        hot: false,
        liveReload: true,
    },
    mode: 'development',
};
