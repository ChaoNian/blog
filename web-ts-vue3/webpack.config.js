const { Configuration, Module } = require('webpack')
const path = require('path')
const Htmlwebpackplugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/**
 * @type{Configuration}
 */

const config = {
    mode: 'development', // //开发模式
    entry: './src/main.ts', //入口
    output: {
        path: path.resolve(__dirname, 'dist'), //出口目录
        // filename: 'main.js'//出口文件
        filename: '[chunkhash].js', // 生成的文件名有hash值
        clean: true // 清理上一次生成的文件
    },
    plugins: [ // 插件
        new VueLoaderPlugin(),
        new Htmlwebpackplugin({
            template: './index.html' // 模版
        }),
        new MiniCssExtractPlugin() // 目前是通过js动态插入style标签的方式进行的，但是我们希望通过link标签引入
    ],
    stats: 'errors-only', // 设置Webpack在编译的时候输出信息的级别。'errors-only'指的是只输出错误信息，这样可以让编译输出更加简洁，只显示必要的错误信息，方便开发者快速定位问题。
    optimization: {
        splitChunks: {
            cacheGroups: {
                moment: {
                    name: 'moment', // 第三方库单独拆包
                    test: /[\\/]node_modules[\\/]moment[\\/]/,
                    chunks: "all" // 不管同步 还是异步
                },
                common: { // 公共依赖
                    name: "common",
                    chunks: "all",
                    minChunks: 2 // 只要被引用超过两次

                }
            },

        }
    },
    module: { // w文件类型处理配置
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'] //从右向左解析
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    }
}


module.exports = config