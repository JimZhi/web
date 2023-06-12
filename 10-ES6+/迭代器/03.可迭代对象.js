// 可迭代对象 [对象有自己的迭代器就被称为可迭代对象]
const infos = {
  friends: ['luffy', 'Uta', '香克斯'],
  // 该对象必须有该函数  该函数的返回值为一个迭代器
  [Symbol.iterator]() {
    let index = 0
    return {
      next() {
        if(index < infos.friends.length) {
          return {
            done: false,
            value: infos.friends[index++]
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

for(const item of infos) {
  console.log(item)
}