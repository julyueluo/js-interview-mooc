// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let b = a.slice(2,-4)
// console.log(b)

// a.forEach(function (item, index, a) {
//   console.log('我执行了')
//   console.log(item, '---', index, '---', a)
// })
// let sum = 0
// a.forEach(function (item) {
//   sum += item
// })
// console.log(sum)

// let res = arr.filter(function a(item) {
//   return item % 2 === 0
// })
/**
 * filter原理
 * 1. 准备一个新数组
 * 2.根据原数组内有多少成员就调用多少次a函数
 * 3.a(111,0,arr)
 *    根据过滤条件
 *    item%2 ===0
 *    111 % 2 ! ===0
 *    结果值：false
 *   111不会加入新数组
 *    --以此类推
 *
 */

/**
 * every
 * 判断数组中是不是每一个都满足条件
 * 返回值：一个布尔值
 * 都满足： true
 * 一个不满足： false
 * 条件以return书写
 */

// arr.every(function (item, index, arr) {
//   return item > 100
// })
/**
 * some()
 * 判断数组是不是有任一个满足条件
 */
// arr.some(function (item, index, arr) {
//   return item > 100
// })

/**
 * find()
 * 在复杂数据类型中查找
 * 用return 写查找的条件
 * arr.find(function(item,index,arr){})
 *
 */

// let objArr = [
//   {
//     id: 1,
//     name: aa,
//   },
//   {
//     id: 2,
//     name: bb,
//   },
//   {
//     id: 3,
//     name: cc,
//   },
// ]
// let id = prompt('id') - 0
// let res2 = objArr.find(function (item) {
//   return item.id === id
// })
/**
 * reduce()
 * 1.准备一个初始值
 */

// let arr3 = ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'c', 'a']
// let res3 = arr3.reduce(function (prev, cur, index, array) {
//   // prev[cur] ? (prev[cur] += 1) : (prev[cur] = 1)
//   prev[cur]=prev[cur]+1||1
//   return prev
// }, {})
// console.log(res3);
// let arr = [1,2,3,4]
// for(let i = arr.length-1;i>=0;i--){
//   arr.splice(i,1)
//   // arr.pop()
// }
// console.log(arr);

// while (arr.length>0) {
//   arr.splice(0,1)
  
// }
// console.log(arr);



