class jQuery {  //新建一个类
  constructor(selector) {   //参数为selector
    const result = document.querySelectorAll(selector) //选中页面所有元素
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
  }
  get(index) {
    return this[index]
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false)
    })
  }
}
//扩展更多 DOM API

const $p = new jQuery('p')
$p.get(1)
$p.each((elem) => console.log(elem.nodeName))
$p.on('click', () => alert('clicked'))
