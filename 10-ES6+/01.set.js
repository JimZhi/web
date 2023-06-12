const set = new Set()
// 添加
set.add('luffy')

console.log(set)

// 属性与方法
console.log(set.size) // 长度
// has delete clear forEach

// 数组去重
const names = [1,2,3,3,4,2,1,4,2,3,5]
console.log([...(new Set(names))])