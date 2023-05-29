const path = require('path')

// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 开发阶段打包使用的
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const devConfig = require('./dev.config')
const prodConfig = require('./prod.config')



// const smp = new SpeedMeasurePlugin()

const getCommonConfig = function(isProduction) { 
  return {
    // 支持多入口
    entry: './src/main.js',

    output: {
      path: path.resolve(__dirname, '../build'),
      filename: 'js/[name]-bundle.js',
      // 重新打包时, 先将之前打包的文件夹删除掉
      clean: true,
      // 单独针对分包的文件进行命名 -> 路由懒加载
      chunkFilename: 'js/[name]_chunk.js',

      // publicPath: 'http://coderwhycdn.com/' 打包生成的所有资源部署到cdn服务器
    },

    // 排除某些包不需要进行打包
    externals: {
      axios: "axios",
    },

    resolve: {
      extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
    },

    

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          // use: "ts-loader"
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          // use: "ts-loader"
          use: [
            isProduction ? MiniCssExtractPlugin.loader: 'style-loader',
            'css-loader'
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
}

// webpack允许导出一个函数
module.exports = function(env) {
  const isProduction = env.production
  let mergeConfig = isProduction ? prodConfig: devConfig
  return merge(getCommonConfig(isProduction), mergeConfig)
  // const finalConfig = merge(getCommonConfig(isProduction), mergeConfig)
  // return smp.wrap(finalConfig)
}