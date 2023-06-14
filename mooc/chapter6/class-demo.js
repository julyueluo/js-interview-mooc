//类  定义后 可以通过new使用
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log(`姓名: ${this.name}, 学号: ${this.number}`)
  }

  //study(){

  // }
}

//通过类声明对象/实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()

const madongmei = new Student('马冬梅',)



//继承   有很多class 有公用