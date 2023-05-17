// node服务器代理
// webpack => webpack-dev-server
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(express.static('./client'))

app.use('/api', createProxyMiddleware({
  target: "http://localhost:9000",
  pathRewrite: {
    '^/api': ''
  }
}))

app.listen(7800, () => {
  console.log('express proxy服务器开启成功')
})
