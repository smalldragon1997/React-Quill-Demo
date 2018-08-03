// 生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 引入webpack
const webpack = require('webpack');
// 清楚旧文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 指定旧文件清楚路径
const pathsToClean = [
    'dist'
];

module.exports = {
    entry: {
        "app.bundle": './src/index.js'  // 前面为指定的name即别名，后面为路径
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].[hash].js'  // name为前面指定的别名，chunkhash为hash值，不重复保证最新的js被加载
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),  // 放在第一个执行
        new HtmlWebpackPlugin({
            template: './src/index.html',  // 模板文件
            title: "again", // 生成文件的title（使用模板文件后title就没用了）
            minify: {
                collapseWhitespace: true // 是否去掉多余空格
            },
            hash: true // 在生成文件后添加hash以便更新
        }),
        new ExtractTextPlugin('style.css'), // 生成的css文件名,
        new webpack.HotModuleReplacementPlugin() // HMR webpack内置插件
    ],
    module: {
        rules: [
            { // 打包css
                test: /\.css$/, // 对于css 使用loader
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            { // 转化react
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',// 使用的loader 配置在.babelrc文件内
                exclude: /node_modules/
            },
            { // 打包图片
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader', // 使用的loader
                        options: {
                            //[name] 代表文件名，[ext] 代表文件扩展名，outputPath 是输出的路径。
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    { // 压缩图片
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            },
            { // src图片资源
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    devServer: { // webpack-dev-sever配置
        port: 9000,
        open: true,
        hot:true
    },
    devtool: 'source-map'  // 定位错误位置
};