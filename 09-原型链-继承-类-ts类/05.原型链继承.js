function Person(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
}
Person.prototype.eating = function() {
  console.log(`${this.name}奔跑吧`)
}

// 需要继承Person属性  和  方法

function Student(name, age, height, score) {
  Person.call(this, name, age, height) // 公共属性的继承
  this.score = score
}

// 公共方法的继承: 找到一个对象，子类的显示原型指向该对象，该对象的隐式原型指向父类的显示原型 
Student.prototype = Object.create(Person.prototype)
Object.defineProperty(Student.prototype, "constructor", {
  configurable: true, // 表示该属性不能被删除修改
  enumerable: false, // 是否可以被枚举
  writable: true, // 只对不可修改
  value: Student, // obj.address返回值
});

Student.prototype.studying = function() {
  console.log(`${this.name}学习考了${this.score}分`)
}

var s = new Student('luffy',16, 188, 98)
console.log(s.eating())
console.log(s.studying())
console.log(s.name)
console.log(Student.prototype)