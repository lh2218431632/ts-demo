// 引入一个包
const path  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports =   {
    mode: "production",
    //指定打包文件所在目录
    entry: './src/index.ts',
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname,'build'),
        //打包后文件的文件名
        filename: "[name].js",
        clean: true
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                test: /\.ts$/,
                //使用ts-loader来处理ts文件
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    },
                    'ts-loader'
                ],
                exclude: path.resolve(__dirname,'node_modules')
            }
        ]
    },
    //配置Webpack插件
    plugins: [
        new HTMLWebpackPlugin({
            title: "ts-demo",
            template: "./index.html"
        }),
    ],
    devServer: {
        static: './build',
        hot: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: ['js','.ts', '...'],
    },
}