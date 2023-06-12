const p = new Promise((resolve, reject) => {

})

p.then((res) => {
  console.log('成功回调', res)
}).catch(err => {
  console.log('失败回调', err)
}).finally(() => {
  console.log('最后的回调')
})

// 类方法
Promise.resolve();
Promise.reject();

// 每个Primise都是resolve
Promise.all([p1, p2, p3])
  .then((res) => {})
  .catch((err) => {});

// 一定执行的是resolve 告诉每个Primise的状态
Promise.allSettled([p1, p2, p3]); 

Promise.race(); // 谁先有结果就用谁的,不管resolve reject
Promise.any(); // 必须resolve