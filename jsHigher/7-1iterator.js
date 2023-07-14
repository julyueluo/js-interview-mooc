//iteration itero
for (let i = 1; i <= 10; ++i){
  // console.log(i);
}
let collection = ['foo', 'bar', 'baz']
for (let index = 0; index < collection.length; ++index){
  // console.log(collection[index]);
}

// Array.prototype.forEach()
// collection.forEach((item) => console.log(item))

// 迭代器模式
// iterable 实现Iterable接口  可以通过迭代器Iterator消费consume

let arr = [3, 1, 4]
let set = new Set().add(3).add(1).add(4)

 let num = 1
 let obj = {}
  // console.log(num[Symbol.iterator]);
  // console.log(obj[Symbol.iterator]);
  
  // 原生语言结构会在后台调用提供的可迭代对象的这个工厂函数
  // 从而创建一个迭代器
  // for-of
  let arr2 = ['foo', 'bar', 'baz']
  for (let el of arr2) {
    // console.log(el);
  }
  
  // 数组结构
let [a, b, c] = arr
// console.log(a,b,c);
 // 扩展操作符
let arr3 = [...arr]
// console.log(arr3);
// Array.from()
let arr4 = Array.from(arr)
// console.log(arr4);

// Set 构造函数
let set1 = new Set(arr)
// console.log(set1);

// Map构造函数
let pairs = arr.map((x, i) => [x, i])
// console.log(pairs);
let map = new Map(pairs)
// console.log(map);

class FooArray extends Array{}
let fooArr = new FooArray('foo', 'bar', 'baz')
for (let el of fooArr){
  // console.log(el);
}

// console.log(arr[Symbol.iterator]);
// console.log(arr[Symbol.iterator]());
let arrr = ['foo', 'baz']
let iter = arrr[Symbol.iterator]()
// console.log(iter.next());
arrr.splice(1,0,'bar')
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// 自定义迭代器
// 方法1 只能迭代一次
class Counter1 {
  // Counter1 的实例应该迭代limit次
  constructor(limit) {
    this.count = 1
    this.limit = limit
  }
  next() {
    if (this.count <= this.limit) {
      return { done: false, value: this.count++}
    } else {
      return { done: true, value: undefined}
    }
  }
  [Symbol.iterator]() {
    return this
  }
}
let counter1 = new Counter1(3)
for(let i of counter1) {
  console.log(i);
}
for(let i of counter1) {
  console.log(i);
}

// 方法2 每次重新计数
class Counter {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1, // 把计数器放入闭包，通过闭包返回迭代器
      limit = this.limit  
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true, value: undefined}
        }
      }
    }
  }
}

let counter = new Counter(3)

// for (let i of counter) { console.log(i)}
// for (let i of counter) { console.log(i)}


//提前终止迭代器
class Counter {
  constructor(limit) {
    this.limit  = limit
  }
  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true}
        }
      },
      return() {
        console.log('Exiting early')
        return { done: true}
      }

    }
  }
}

let counter3 = new Counter(5)
for (let i of counter3) {
  if (i > 2) {
    break
  }
  console.log(i)
}

let counter4 = new Counter(5)
try {
  for (let i of counter4) {
    if (i > 2) {
      throw 'err'
    }
    console.log(i)
  }
} catch(e) {}
//p191