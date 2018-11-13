module.exports = {
    devtool: 'eval-source-map', //强调你只应该开发阶段使用它
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public", //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录
        //下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，
        // 所有的跳转将指向index.html
        inline: true //设置为true，当源文件改变时会自动刷新页面
    },
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack",
        "server": "webpack-dev-server --open"
    },
    module: { //在webpack中配置Babel的方法
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            },
            exclude: /node_modules/
        }]
    }
}