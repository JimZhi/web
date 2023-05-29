const glob = require('glob')
const path = require('path')

const webpack = require('webpack')

// js代码压缩
const TerserPlugin = require('terser-webpack-plugin')
// css代码压缩
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
// css提取
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// css tree shaking
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')

// 对打包后定位文件
const CompressionPlugin = require("compression-webpack-plugin")

// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',

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
            pure_funcs: ['console.*'],
          },
          mangle: true,
        }
      }),
      // CSS压缩的插件: CSSMinimizerPlugin
      new CSSMinimizerPlugin({
        // parallel: true
      })
    ]
  },

  plugins: [
    // 完成css的提取
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name]_chunk.css'
    }),

    // 对CSS进行TreeShaking
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(__dirname, '../src')}/**/*`, { nodir: true }),
      safelist: function() {
        return {
          standard: ["body"]
        }
      }
    }),

    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),

    // 对打包后的文件(js/css)进行压缩
    new CompressionPlugin({
      test: /\.(js|css)$/,
      algorithm: 'gzip'
    }),

    // 对打包后的结果进行分析
    new BundleAnalyzerPlugin()
  ]
}