//super执行父类的构建函数/过程
//extends 继承
//扩展和重写方法
//父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}
//子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名 ${this.name} 学号 ${this.number}`)
  }
}
//子类
class Teacher extends People {
  constructor(name, major) {
    super(name) //继承了父类的变量就不用每次都定义了，修改父类后不用麻烦的一个个改
    this.major = major
  }
  teach() {
    console.log(`姓名 ${this.name} 教授 ${this.major}`)
  }
}

const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()

const wang = new Teacher('王老师', '语文')
console.log(wang.name)
console.log(wang.major)
wang.eat()
wang.teach()

console.log(xialuo instanceof Student)
console.log(xialuo instanceof People)
console.log(xialuo instanceof Object)
