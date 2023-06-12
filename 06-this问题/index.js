function foo() {
  console.log(this)
}

foo() // window

let obj = {
  bar: foo
}
obj.bar() // obj

let str = '字符串'
add.call(str) // str

// new绑定
let p = new add() // p实例