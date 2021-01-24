// 问题：使用递归编写一个collectStrings的函数，函数接收一个object对象，要求返回对象中value值类型为字符串的内容，并保存为一个数组。
// 例如：
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadaIt: 'baz',
          },
        },
      },
    },
  },
};

collectStrings(obj); // ['foo','bar','baz']

function collectStrings() {}
