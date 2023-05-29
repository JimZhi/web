import { sum, mul } from './utils/math'

// 第三方库
import _ from 'lodash-es'

// ts
import { formatPrice } from './ts/format'

import "./css/style.css"
import "./css/normal.less"

import { createApp } from 'vue'
import VueApp from './vue/App.vue'

import ReactApp from './react/App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'

// es6的代码
const message = "Hello World"
console.log(message)

const foo = () => {
  console.log("foo function exec~")
}
foo()

// 模块化代码的使用
console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(_.join(["abc", "cba"]))

// ts的代码
console.log(formatPrice(10000))


// DOM操作
const titleEl = document.createElement("h2")
titleEl.textContent = "你好啊, 李银河!"
titleEl.className = "title"
document.body.append(titleEl)

const app = createApp(VueApp)
app.mount(document.querySelector("#app"))

// React代码渲染
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<ReactApp />)
