/**
 * 1. 引用计数算法
 */
const p = new Person()
// 会定义一个全局的 count 计数, 当计数为 0 的时候 开始进行垃圾回收
// 弊端： 循环引用

const info = {
  obj: info
}
