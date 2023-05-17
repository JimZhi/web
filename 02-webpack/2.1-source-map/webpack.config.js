const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // development / production
  mode: 'development', 

  // development -> source-map || cheap-module-source-map
  // production -> false
  devtool: 'source-map',

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true
  },

  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
  },

  // 开启本地服务
  devServer: {
    static: ['public', 'content'], // 静态资源 模板单独引入
    // host: '0.0.0.0',
    port: 7000,
    open: true,

    compress: true, // 本地开发的时候，启动服务也会被压缩

    // 开启本地服务，给本地服务配置代理
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },

    // 决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误
    // 刷新时，404 会去自动找模板index.html
    // http://localhost:7000/about Cannot GET /about
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          // babel配置可以单独写个文件
          // options: {
          //   presets: [
          //     "@babel/preset-env"
          //   ]
          // }
        }
      },
      {
        test: /\.ts$/,
        // use: "ts-loader"
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
  
}