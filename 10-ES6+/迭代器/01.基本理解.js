//
const names = ['luffy', 'SanJi', 'Robin']
// 为什么能直接遍历数组，因为内部有个迭代器
// 1. 迭代器本质是一个对象
let index = 0
const namesIterator = {
  // 2. 对象内部有特定的 next方法
  next() {
    if(index < names.length) {
      return {
        done: false,
        value: names[index++]
      }
    } else {
      return {
        done: true
      }
    }
    // next必须有返回值对象，且有 down属性 和  value属性
    // return {
    //   done: '',
    //   value: ''
    // }
  }
}
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
