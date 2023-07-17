// 通用事件绑定函数
// function bindEvents(elem, type, fn) {
//   elem.addEventListener(type,fn)
// }

// 通用事件绑定函数 兼容普通绑定和代理绑定
function bindEvent(elem, type, selector, fn){
  if(fn === null){
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event=>{
    const target = event.target
    if(selector){
      //代理绑定
      if(target.matches(selector)){
        fn.call(target, event)
      }
    } else {
      //普通绑定
      fn.call(target, event)
    }
  })
}
// let btn = document.createElement('button')
// btn.id = 'btn1'
const body = document.body
// body.appendChild(btn)
// const btn1 = document.getElementById('btn1')
// console.log(btn1.id);

// bindEvents(btn1,'click', event => {
//   console.log(event.target);
//   event.preventDefault() //阻止默认行为
//   alert('clicked')
// })

bindEvents(body, 'click', event => { 
  console.log('body clicked');
  console.log(event.target);
})
const div1 = document.getElementById('div1')
bindEvents(div1, 'click',event=>{
  event.stopPropagation()  //阻止冒泡
  console.log('div1 clicked');
  console.log(event.target);
})



