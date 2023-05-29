// import axios from 'axios'

import React from "react";
import ReactDom from "react-dom/client";
import App from "./react/App";

import './css/style.css'

import { sum } from './ts/math';

const message = "Hello World"
console.log(message)

// console.log(counter)
const foo = () => {
  console.log("foo function exec~")
}
foo()

// 3.对象的结构
const obj = { names: "why", age: 18 };
const { names, age } = obj;
console.log(names, age);

// 4.使用字符串中includes方法
const nickname = "coderertt";
console.log(nickname.includes("coder"));

// 5.编写react代码
const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);

// 6.使用typescript代码
console.log(sum(20, 30))
console.log(sum("aaa", "bbb"))


// 请求数据
// http://localhost:9000/users/list
axios.get('/api/users/list').then(res => {
  console.log(res.data)
})

// 路由懒加载
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
btn1.textContent = '关于'
btn2.textContent = '分类'
document.body.append(btn1)
document.body.append(btn2)

btn1.onclick = function() {
  import(/* webpackChunkName: "about" */'./router/about').then(res => {
    res.about()
    // res.default()
  })
}

btn2.onclick = function() {
  import(/* webpackChunkName: "category" */ /* webpackPrefetch: true */'./router/category')
}




