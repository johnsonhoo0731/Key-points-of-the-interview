// 处理乱码问题
const { StringDecoder } = require('string_decoder')

const buffer1 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5])
const buffer2 = Buffer.from([0xae, 0xb6, 0xe5, 0xa5, 0xbd])

const decoder = new StringDecoder()
const res1 = decoder.write(buffer1)
const res2 = decoder.write(buffer2)
console.log(res1, res2)