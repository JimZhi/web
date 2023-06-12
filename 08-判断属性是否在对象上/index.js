let obj = {
  name: 'luffy',
  age: 23,
  height: 1.88,
  address: '东海风车村'
}

// 属性描述符
Object.defineProperty(obj, 'address', {
  configurable: false, // 表示该属性不能被删除修改
  enumerable: false, // 是否可以被枚举
  writable: false, // 只读不可修改
  value: 'code' // obj.address返回值
})