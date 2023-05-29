const path = require('path')

// 开发阶段打包使用的
const HtmlWebpackPlugin = require('html-webpack-plugin')

// js代码压缩
const TerserPlugin = require('terser-webpack-plugin')
// css代码压缩
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')

// css提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development', // 默认值是 production development
  devtool: 'cheap-source-map', // dev: source-map  cheap-module-source-map  pro： false

  // 支持多入口
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './build'),
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
    // key属性名: 排除的框架的名称
    // value值: 从CDN地址请求下来的js中提供对应的名称
  },

  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
  },

  devServer: {
    static: ['public'],
    // host: '0.0.0.0',
    port: 3000,
    open: true,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.ts$/,
        // use: "ts-loader"
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // use: "ts-loader"
        use: [
          // 'style-loader', // 开发阶段
          MiniCssExtractPlugin.loader, // 生产阶段
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // 完成css的提取
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]_chunk.css'
    })
  ],

  // 针对生产环境的优化配置
  optimization: {
    // runtime的代码是否抽取到单独的包中(早Vue2脚手架中)
    // runtimeChunk: {
    //   name: "runtime"
    // },
    // 分包插件: SplitChunksPlugin
    splitChunks: {
      chunks: 'all',
      // 当一个包大于指定的大小时, 继续进行拆包
      // maxSize: 20000,
      // minSize: 10,
      // 自己对需要进行拆包的内容进行分包
      cacheGroups: {
        libs: {
          test: /[\\/]node_modules[\\/]/,
          filename: "js/common-chunk-plugins.js"
        }
      }
    },

    // 代码优化: TerserPlugin => 让代码更加简单
    minimize: true, // 开发状态下生效徐开启  
    minimizer: [
      // JS代码压缩插件
      new TerserPlugin({
        extractComments: false, // 对第三方注释进行抽取
        terserOptions: {
          compress: {
            warnings: false,
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.*']
          },
          mangle: true,
        }
      }),
      // CSS压缩的插件: CSSMinimizerPlugin
      new CSSMinimizerPlugin({
        // parallel: true
      })
    ]
  }
}