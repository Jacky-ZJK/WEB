function ajax (options = {}) {
  options.method = options.method || 'get'
  options.data = options.data || {}
  options.dataType = options.dataType || 'text'
  let result = []
  for (let key in options.data) {
    result.push(`${key}=${encodeURIComponent(options.data[key])}`)
  }

  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
      let data = xhr.responseText
      switch (options.dataType) {
        case 'json' :
          break
      }

      options.success && options.success(data)
    } else {
      options.error && options.error()
    }
  }

  if (options.method.toLowerCase() === 'post') {
    xhr.open(options.method, encodeURIComponent(options.url), true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencode')
    xhr.send(result.join('&'))
  } else {
    xhr.open(options.method, encodeURIComponent(options.url) + '?' + result, true)
    xhr.send()
  }
}