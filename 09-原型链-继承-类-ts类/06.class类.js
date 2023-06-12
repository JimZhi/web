class Person {
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this.height = address
  }

  running() {
    console.log(`${this.name}实例方法`)
  }

  // 静态方法
  static eating() {
    console.log(`${this.name}类方法`)
  }
}

let p1 = new Person('路飞', 14, '东海')

console.log(p1.name)
console.log(p1.running())
console.log(Person.eating())

// 继承
class Student extends Person {
  constructor(name, age, address, score) {
    super(name, age, address)
    this.score = score
  }

  study() {
    console.log(`${this.name}学习`)
  }

  // 子类对父类方法重写
  running() {
    console.log('对父类方法部分重写')
    super.running()
  }
}

let stu = new Student('乌索普', 15, '北京', 983)

console.log(stu.running())
