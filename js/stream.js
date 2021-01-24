const fs = require('fs')

// 创建一个65kb的文件
const buffer = Buffer.alloc(65 * 1024)

let str = ''

fs.writeFile('65kb', buffer, err => {
  if (err) {
    return err
  }
  console.log('writein succss')
})


const rs = fs.createReadStream('65kb')
rs.on('data', chunk => {
  str += chunk
  console.log(chunk)
})

rs.on('end', () => {
  console.log('end', str)
})