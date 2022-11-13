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
        port: 8080,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    entry: {
        main: [
            // path.resolve(__dirname, './src/pages/main/index.js'),
            path.resolve(__dirname,'./src/pages/main/index.css')
        ],
        quizes: [
        path.resolve(__dirname,'./src/pages/quiz/quiz.css'),
        // path.resolve(__dirname, './src/pages/quiz/quiz.js')
    ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/pages/main/index.html'), // шаблон
            filename: 'index.html', // название выходного файла,
            
        }),
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './src/pages/quiz/quiz.html'),
          filename: 'quiz.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
    // resolve: {
    //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // },
    optimization: {
        runtimeChunk: 'single'
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
              test: /\.html$/,
              use: [{
                loader: 'html-loader',
                options: {
                  minimize: true
                }
              }],
            },
            // CSS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //       'style-loader',
            //       'css-loader'
            //     ]
            // },
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