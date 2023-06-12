// 生成器替代迭代器
const names = ['luffy', 'jack', 'joker']

function* createArrayIterator(arr) {
  yield* arr // 接收一个可迭代对象，依次取出每一项做next的返回值
}

const namesGenerator = createArrayIterator(names)

console.log(namesGenerator.next())
console.log(namesGenerator.next())
console.log(namesGenerator.next())
console.log(namesGenerator.next())
