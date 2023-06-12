/**
 * 1. class类
 * 2. 对象字面量加强
 * 3. 数组对象解构
 * 4. let const
 * 5. 模板字符串
 * 6. 函数增强 【默认参数】
 * 7. 箭头函数
 * 8. 展开运算符 【函数 数组 对象】
 * 9. Symbol [独一无二 key new Symbol()]
 * 10. Map Set WeakMap WeakSet
 * 11. Array.includes('qq)
 * 12. Object.values(obj)
 * 13. Object.entries(obj)  --> Object.fromEntries
 * 14. padStart padEnd
 * 15. flat
 * 16. 可选链 obj?.a
 * 17. string.replaceAll()
 * 18. Proxy
 * 19. Promise 【all allSeleted race any】
 */

// 对象字面量增强
let obj = {
  age,
  height,
  foo() {}
}

// 数组对象解构
let [a, b, c] = [1, 2, 3]
let { age, height } = obj

// 默认值
function foo(arg1) {
  // 排除undefined 和 null
  arg1 = arg1 ?? '默认值'
}

// 展开运算符 -> 浅拷贝
const arr = [1,2,3]
const info = {
  name: 'luffy',
  age: 18
}
foo(...arr)
// 构建对象字面量时候
const info1 = {
  ...info
}
