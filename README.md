## 1. 跨域问题

总结：
同源协议：协议 + 服务 + 端口号 一致才能访问同源下的文件，浏览器的自我保护
早期服务端渲染不会有跨域问题，前后端分离后，前端的静态资源和后端的 Api 接口可能部署在不同的服务器，或者不同端口上就产生了跨域。

解决方案:
1.1 部署在同一个服务器端口上
1.2 CORS 服务器开启跨资源共享
1.3 node 代理服务器 [webpack 会在本地开启一个 express 代理服务器，webpack-dev-server 本质上是 http-proxy-middleware ]
1.4 Nginx 反向代理

## 2. webpack

babel 用法 【react ts 支持】

浏览器兼容 .browserslistrc

polyfill 【更好使用 js】
npm install core-js regenerator-runtime --save

webpack-dev-server 本地服务

proxy 代理配置

## 3. webppack 性能优化

### 3.1 打包后的结果

- 代码分包处理
  第三方库 + 业务代码 + webpack 运行代码，所有都打包到一个 bundle.js 太大
  首屏渲染速度很慢
  三种方式实现代码分包:

  1. 项目使用多入口起点 [两个入口引入了公共的第三方包，需要配置共享包]
  2. 动态导入， 路由懒加载 [import()] 语法
  3. 自定义分包

- 代码压缩丑化
- 删除无用代码，tree-shaking
- CDN 服务器

### 3.2 打包速度
