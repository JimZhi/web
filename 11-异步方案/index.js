function requestData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url)
    }, 3000)
  })
}

// 回调地狱一
requestData('http://www.baidu.com').then(res => {
  console.log(res, '结果-1')
  requestData('http://www.jd.com').then(res => {
    console.log(res, '结果-2')
  })
})

// 方式二 Promise 链式调用
requestData('http://www.baidu.com').then(res => {
  console.log(res, '结果-1')
  return requestData(res + 'jd.com')
}).then(res2 => {
  console.log(res2, '结果-2')
})

// 方式三
function* getData() {
  const res1 = yield requestData('先诛少林')
  const res2 = yield requestData(res1 + '在灭武当')
  const res3 = yield requestData(res2 + '宝刀屠龙')
  const res4 = yield requestData(res3 + '号令天下')
  console.log(res4)
}
const generator = getData()

generator.next().value.then(res1 => {
  generator.next(res1).value.then(res2 => {
    console.log(res2, '生成器结果')
  })
})


async function getData() {
  let res1 = await requestData('参数1')
  let res2 = await requestData(res1 + '-参数2')
  let res3 = await requestData(res2 + '-参数3')
  let res4 = await requestData(res3 + '-参数4')
  console.log(res4)
}

getData()

