// 手写bind 函数


//模拟bind
Function.prototype.bind1 = function () {
  // 将参数拆解为数组  arguments列表变数组
  const args = Array.prototype.slice.call(arguments )

  // 获取 this (数组第一项)
  // this 获取完后 数组第一项就不需要了
  const t = args.shift()

  //  this fn1.bind(...)中的 fn1
  const self = this 

  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}
function fn1(a, b, c) {
  console.log('this是', this);
  console.log((a, b, c*2));
  return 'this is fn1'
}
const fn2 = fn1.bind({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res);


