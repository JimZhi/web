module.exports = {
  mode: 'development',

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
}