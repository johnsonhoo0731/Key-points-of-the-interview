/**
 * bind实现
*/
Function.prototype.myBind = function(thisArg) {
  if (typeof this !== 'function') {
    throw TypeError('myBind must be called on a function');
  }
  // 拿到参数，传递给调用者
  const args = Array.prototype.slice.call(arguments, 1);
  const self = this;
  // 构造一个干净的函数，用于保存函数的原型
  const nop = function() {}
  // 绑定的函数
  const bound = function() {
    // this instanceof nop，判断是否使用new来调用bound
    return self.apply(
      this instanceof nop ? this : thisArg,
      args.concat(Array.prototype.slice.call(arguments))
    );
  }
  // 箭头函数没有prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  // 修改绑定函数的原型指向
  bound.prototype = new nop();
  return bound;
} 