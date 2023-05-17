import axios from 'axios'

import React from "react";
import ReactDom from "react-dom/client";
import App from "./react/App";

import { sum } from './ts/math';

const message = "Hello World"
console.log(message)

const foo = () => {
  console.log("foo function exec~")
}
foo()

const nickName = 'coder123luffytyui'
console.log(nickName.includes('luffy'))

// console.log(counter)

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);

console.log(sum(20, 30))
console.log(sum("aaa", "bbb"))

// 请求数据
// http://localhost:9000/users/list
axios.get('/api/users/list').then(res => {
  console.log(res.data)
})