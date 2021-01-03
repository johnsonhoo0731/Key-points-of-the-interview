const obj = {
  number: 2
};

const handler = {
  get(target, key) {
    console.log(arguments);
    return Reflect.get(...arguments);
  }
}

const proxy = new Proxy(obj, handler);
const num = proxy.number;
// console.log(proxy.number);