//值类型
// let a = 100
let a = { age: 100 }
let b = a
// a = 200
b.age = 200
// console.log(b)
console.log(a.age)

//常见引用类型
const obj = { x: 100 }
const arr = ['a', 'b', 'c']
const n = null //特殊引用类型，指针指向空地址
function fn() {} //特殊引用类型，但不用于存储数据，所以没有拷贝、复制函数这一说；
