const obj = {
  name: 'luffy',
  age: 18,
  address: '皖'
}

const proxyObj = new Proxy(obj, {
  // 目标对象 key值 代理对象
  get(target, key, receiver) {
    console.log(`正在获取${target}的${key}的值`)
    // 尽量减少原对象的操作
    // return target[key]
    return Reflect.get(target, key, receiver)// receiver用来确定this指向
  },
  set(target, key, newValue, receiver) {
    console.log(`正在设置${key}属性的新值为${newValue}`)
    Reflect.set(target, key, newValue) // 这里会返回一个boolean值 
  }
})

// 获取值
console.log(proxyObj.age)
// 设置值
proxyObj.address = '川'