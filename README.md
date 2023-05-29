## 1. 跨域问题

总结：
同源协议：协议 + 服务 + 端口号 一致才能访问同源下的文件，浏览器的自我保护
早期服务端渲染不会有跨域问题，前后端分离后，前端的静态资源和后端的 Api 接口可能部署在不同的服务器，或者不同端口上就产生了跨域。

解决方案:
1.1 部署在同一个服务器端口上
1.2 CORS 服务器开启跨资源共享
1.3 node 代理服务器 [webpack 会在本地开启一个 express 代理服务器，webpack-dev-server 本质上是 http-proxy-middleware ]
1.4 Nginx 反向代理

## 2. webpack 性能优化

- 打包时候 source-map 的选择
- babel 的使用 [babel-loader 和 预设]
- 浏览器兼容 .browserslistrc
- polyfill 【更好使用 js】 高级语法有 API 浏览器不支持
  pnpm install core-js regenerator-runtime --save
- webpack-dev-server 本地服务
  proxy 代理配置

### 2.1 打包后的结果

- 代码分包处理
  第三方库 + 业务代码 + webpack 运行代码，所有都打包到一个 bundle.js 太大
  首屏渲染速度很慢
  三种方式实现代码分包:

  1. 项目使用多入口起点 [两个入口引入了公共的第三方包，需要配置共享包]
  2. 动态导入， 路由懒加载 [import()] 语法 对异步代码打包
  3. 自定义分包 【第三方包 axios 被打包到了 主文件中。是不可以的】
  4. prefetch 预获取（浏览器闲置的时候） 路由懒加载的时候进行预获取

  ```js
  import(
    /* webpackChunkName: "about" */
    /* webpackPrefetch: true */
    "./router/about"
  ).then((res) => {
    res.about();
    res.default();
  });
  ```

- CDN 服务器
- 代码压缩丑化 [css 提取]
  Terser: 代码压缩 【js / css 压缩】
- 删除无用代码，tree-shaking
- 作用域提升
- http 压缩 gzip

### 2.2 打包速度

- 打包分析

## 3. vite

现在的浏览器已经能支持 ES6、模块化以上的代码。
在开发阶段，vite 想直接使用 ES6 语法，不进行打包操作，提高开发效率
pnpm add vite -D npx vite 会自动开启一个服务器

通过服务器请求（connect）对应的 js ts 代码，通过 esbuild 转换成浏览器支持的 js 代码 转发到浏览器
使用 ESBuild 进行构建，底部使用的是 Go 语音， 未使用过第三方
