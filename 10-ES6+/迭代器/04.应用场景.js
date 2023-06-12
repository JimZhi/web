// 普通对象 -> 可迭代对象
const obj = {
  name: 'luffy',
  age: 19,
  address: '皖',
  height: 1.88,

  [Symbol.iterator]() {
    let keys = Object.keys(this)
    let index = 0
    return {
      next() {
        if(index < keys.length) {
          return {
            done: false,
            value: keys[index++]
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
}

// 很多方法需要传入可迭代对象
for(let item of obj) {
  console.log(item)
}

let sets = new Set(obj)
console.log(sets)

console.log(Array.from(obj))
