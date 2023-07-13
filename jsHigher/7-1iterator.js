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

let arr2 = ['foo', 'bar', 'baz']
  for (let el of arr2) {
    // console.log(el);
  }

let [a, b, c] = arr
// console.log(a,b,c);
 
let arr3 = [...arr]
// console.log(arr3);

let arr4 = Array.from(arr)
console.log(arr4);
