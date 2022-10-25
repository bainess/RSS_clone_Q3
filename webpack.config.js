const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode: 'production',
    // devtool,
    devServer: {
        port: 9000,
        hot: true,
        static: {
            directory: path.join(__dirname, './dist'),
        },
    },
    entry: {
        // style: path.resolve(__dirname, './src/index.css'),
        // main: path.resolve(__dirname, './src/index.js'),
        main: ['./src/index.js', './src/index.css'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), // шаблон
            filename: 'index.html', // название выходного файла,
            
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // Шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/resource'
            },
            // аудио
            {
                test: /\.(ogg|mp3|wav)$/i,
                loader: 'file-loader',
                options: {
                    filename: '/assets/sounds/[name].[hash:8].[ext]',
                    // outputPath: (url) => `/assets/sounds/${url}`,
                },
            },
            // {
            //     test: /\.(jpe?g|png|webp|gif|svg|mp3)$/i,
            //     use: [
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 mozjpeg: {
            //                     progressive: true,
            //                 },
            //                 optipng: {
            //                     enabled: false,
            //                 },
            //                 pngquant: {
            //                     quality: [0.65, 0.90],
            //                     speed: 4
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //                 // the webp option will enable WEBP
            //                 webp: {
            //                     quality: 75
            //                 }
            //             }
            //         }
            //     ],
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
            //     type: isDev ? 'asset' : 'asset/resource',
            //     generator: {
            //       filename: 'assets/img/[name][hash][ext][query]',
            //     },
            //     parser: {
            //       dataUrlCondition: {
            //         maxSize: 10 * 1024,
            //       },
            //     },
            //   },
        ],
    },
}