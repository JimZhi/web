function createArrayIterator(arr) {
  let index = 0
  return {
    next() {
      if(index < arr.length) {
        return {
          done: false,
          value: arr[index++]
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

let numsIterator = createArrayIterator([1,2,34,56])
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
console.log(numsIterator.next())
