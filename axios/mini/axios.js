function axios(options, cb) {
    let url = options.url || options
    let method = options.method || 'GET'

    let xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.timeout
    xhr.withCredentials

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            return
        }
        resp = xhr.response

        options.success(resp)
    }
    xhr.onerror = function() {
        options.error('error')
    }
    xhr.send()
}
