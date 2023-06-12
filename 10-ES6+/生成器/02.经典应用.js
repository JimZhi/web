// 生成器替代迭代器
const names = ['luffy', 'jack', 'joker']

function* createArrayIterator(arr) {
  // yield arr[0]
  // yield arr[1]
  // yield arr[2]
  // return undefined
  for(let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

const namesGenerator = createArrayIterator(names)

console.log(namesGenerator.next())
console.log(namesGenerator.next())
console.log(namesGenerator.next())
console.log(namesGenerator.next())