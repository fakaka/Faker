function axios(options, cb) {
    let url = options.url || options
    let method = options.method || 'GET'

    let xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.onreadystatechange = function() {
        if (xhr.status != 4) {
            return
        }
        resp = xhr.response

        cb(resp)
    }
    xhr.onerror = function () {
        console.log('error')
    }
    xhr.send()
}
