// 1. 表示该函数是生成器函数 function*
function* foo() {
  console.log('第一步')
  const resultStep1 = yield '第一步的返回结果'

  console.log('第二步')
  console.log('第三步')
  console.log('第四步')
  console.log(resultStep1) // 这是第二部调用的时候传入的参数
  yield

  console.log('第五步')
  console.log('第六步')
}

// 2.生成器函数执行的时候返回一个生成器对象
const generator = foo()
console.log(generator)

// 3. 生成器函数调用
console.log(generator.next()) // { value: '第一步的返回结果', done: false }
console.log(generator.next('这里可以传入参数'))
console.log(generator.next())

// 4. 返回值问题
// { value: undefined, done: false } value值可以通过yeild进行传值
