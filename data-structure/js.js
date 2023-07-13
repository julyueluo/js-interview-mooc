// ...
function sum(x = 1, y = 2, z = 3) {
  return x + y + z
}
let params = [3,4,5]
// console.log(sum(...params));

// console.log(sum.apply(undefined,params));

function restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length
  
}
// console.log(restParamaterFunction(1, 2, "hello", true, 7));

function restParamaterFunction (x, y) {
  var a = Array.prototype.slice.call(arguments, 2)
  return (x + y) * a.length
}
// console.log(restParamaterFunction(1, 2, "hello", true, 7))

let [x,y] = ['a','b']
let  obj = {x, y}
// console.log(obj);
const hello = {
  name: 'abcdef',
  printHello: function printHello() {
    console.log('Hello');
  }
}
// console.log(hello.printHello());

// function Book(title, pages, isbn) {
//   this.title = title
//   this.pages = pages;
//   this.isbn = isbn;
// }
class Book {
  constructor(title, pages, isbn){
    this.title = title
    this.pages = pages
    this.isbn = isbn
  }
  printIsbn() {
    console.log(this.isbn);
  }
}
Book.prototype.printTitle = function() {
  console.log(this.title);
}
let book = new Book('title','pag','isbn')
// console.log(book.title);
book.title = 'new title'
// console.log(book.title);
// book.printIsbn()
// book.printTitle()

class ITBook extends Book {
  constructor (title, pages, isbn, technology){
    super(title, pages, isbn)
    this.technology = technology
  }
  printTechnology() {
    console.log(this.technology);
  }
}
let jsBook = new ITBook('学习JS算法', '200', '1234567890','JavaScript')
console.log(jsBook.title);
console.log(jsBook.printTechnology());

class Person {
  constructor (name) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}
let lotrChar = new Person('Frodo')
console.log(lotrChar.name)
lotrChar.name = 'Gandalf'
console.log(lotrChar.name)
lotrChar._name = 'Sam'
console.log(lotrChar.name)

const area = 3.14 * r * r
const area2 = 3.14 * Math.pow(r,2)
const area3 = 3.14 * (r**2)


// 模块
