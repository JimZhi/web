## 什么是跨域

```js
1. 同源策略：协议 主机 端口号 组成一个元组
2. 早期服务端渲染不会有跨域问题，前后端分离后，前端的静态资源和后端的Api接口可能部署在不同的服务器，或者不同端口上就产生了跨域。

// 3. live-server : 127.0.0.1:5500 打开服务器 会存在跨域

```

## 解决方案

1. 部署在同一个服务器端口下

```js
const static = require("koa-static");
app.use(static("./client"));

// http://localhost:9000/
```

2. CORS 服务器开启跨资源共享

```js
服务器中标志除了自身还有谁可以访问，跨资源共享

app.use(async (ctx, next) => {
  // 1.允许简单请求开启CORS
  ctx.set("Access-Control-Allow-Origin", "*")
  // 2.非简单请求开启下面的设置
  ctx.set("Access-Control-Allow-Headers", "Accept, AcceptEncoding, Connection, Host, Origin")
  ctx.set("Access-Control-Allow-Credentials", true) // cookie
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
//   // 3.发起的是一个options请求
//   if (ctx.method === 'OPTIONS') {
//     ctx.status = 204
//   } else {
//     await next()
//   }
  await next()
})
```

3. node 代理服务器 (webpack)

```js
// vue/node项目 -> webpack-dev-server => 开启node服务器 -》 请求服务器数据
// http-proxy-middleware
// http://localhost:7800/api/users/list [前端 127.0.0.1:5500]

// 7800是node代理服务器 也存在跨域 【实际上webpack中 代理服务器 和 本地同源】
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:9000",
    pathRewrite: {
      "^/api": "",
    },
  })
);
```

4. Nginx 反向代理

```
https://nginx.org/en/download.html
```

不常用：jsonp postMessage websocket

```

```
