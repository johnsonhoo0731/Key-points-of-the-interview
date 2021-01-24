const xhr = new XMLHttpRequest()
xhr.open('post', '/get/2', true)
// 前端也可重写content-type
xhr.overrideMimeType('content-type', 'text/xml')
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.setRequestHeader('content-type', 'application/json')
const data = [{
  name: 'john'
}]
xhr.send(JSON.stringify(data))