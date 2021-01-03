// 组合继承
function Dad(name, age) {
  this.name = naem
  this.age = age
}

function Son(name, age) {
  Dad.call(this, name, age)
  this.sex = 1
}

const Link = function() {}
Link.prototype = Dad.prototype 
Son.prototype = new Link()
Son.prototype.constructor = Son

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.sayName = function() {
  console.log(this.name)
}
Person.prototype.sayAge = function() {
  console.log(this.age)
}
function Child(name, age) {
  Person.call(this, name, age)
}
const child = new Child('john', 8)