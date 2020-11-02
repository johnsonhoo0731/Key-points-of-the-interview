Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    console.log('type error');
  }
  const args = [...arguments].slice(1);
  context = context ? Object(context) : window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function(context, arr) {
  if (typeof this !== 'function') {
    console.log('type error');
  }
  context.fn = this;
  let result = null;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn(...arr);
  }
  delete context.fn;
  return result;
}

Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    console.log('type error');
  }
  const self = this;
  const args = [...arguments].slice(1);
  const fn = function() {};
  const bound = function() {
    const params = [...arguments].slice(0);
    self.apply(this instanceof fn ? this : context, args.concat(params));
  }
  fn.prototype = this.prototype;
  bound.prototype = new fn();
  return bound;
}

function Animal(name, size) {
  this.name = name;
  this.size = size;
}

function Cat(age, name, size) {
  Animal.myBind(this, name, size)();
  this.age = age;
}

const c = new Cat(12, 'Tom', 100);

console.log(c.age, c.name, c.size);