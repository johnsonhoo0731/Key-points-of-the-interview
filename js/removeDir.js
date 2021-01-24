const fs = require('fs')

function removeDir(path) {
  const data = fs.readdirSync(path)
  for (let i = 0; i < data.length; i++) {
    const url = path + '/' + data[i]
    const stat = fs.statSync(url)
    if (stat.isDirectory()) {
      removeDir(url)
    } else {
      fs.unlinkSync(url)
    }
  }
  fs.rmdirSync(path)
}

module.exports = removeDir