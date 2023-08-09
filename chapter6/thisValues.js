// this在函数执行时确定，不是定义时确定
// 1. 
function fn1() {
  console.log(this);
}
fn1() // window

// 2.
fn1.call({ x: 100}) //{x: 100}  call 改变 this 
// 3. 
const fn2 = fn1.bind({x: 200})
fn2() // {x： 200} bind 改变 this的指向  
// 但是bind是返回一个新函数执行
// 4. 5. 
// const zhangsan = {
//   name: '张三',
//   sayHi() {
//     console.log(this)  //zhansan对象
//   },
//   wait() {
//     setTimeout(() => {
//       console.log(this); //zhansan对象
//     });
//   }
// }

const zhangsan = {
  name: '张三',
  sayHi() {
    console.log(this)  //zhansan对象
  },
  wait() {
    setTimeout(function () { //
      console.log(this); //window
    });
  }
}

// zhangsan.sayHi()
// zhangsan.wait()

// 6. 
class People {
  constructor(name) {
    this.name = name
    this.age = 20

  }
  sayHi() {
    console.log(this)
  }
}
const lisi = new People('李四')
lisi.sayHi()  // lisi 对象
