// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

Array.prototype.myReduce = function (callback) {
  const arr = this;
  const len = arr.length;
  let index = 0;
  let accumulator = undefined;
  let idxExist = false;
  let initialValue = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  // 数组为空，并且有初始值
  if (len === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value');
  }
  // 如果初始值存在
  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    accumulator = arr[index];
    ++ index;
  }

  while (index < len) {
    idxExist = arr.hasOwnProperty(index);
    if (idxExist) {
      const idxValue = arr[index];
      accumulator = callback.apply(undefined, [accumulator, idxValue, index, arr]);
    }
    ++ index;
  }
  return accumulator;
}

const arr = [1, 2, 3, 4];

const res = arr.myReduce((prev, value) => prev + value, 0);
console.log(res)