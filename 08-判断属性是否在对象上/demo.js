function Obj() {}
Obj.prototype.a = 1
const obj = new Obj()
// const obj = {
//   // a: 1
// }

// Object.defineProperty(obj, 'a', {
//   enumerable: false
// })

// 获取的是对象自有属性  获取不到原型上的属性  可枚举 enumerable为true
if(Object.keys(obj).includes('a')) {
  console.log('存在ObjectKeys')
} else {
  console.log('不存在-1')
}

// 获取的是对象自有属性 不管是否能枚举 只能判断自有属性
if(obj.hasOwnProperty('a')) {
  console.log('hasOwnProperty存在')
} else {
  console.log('不存在-2')
}

// 可以在原型上 是否可以枚举无关
if('a' in obj) {
  console.log('in存在')
} else {
  console.log('不存在-3')
}