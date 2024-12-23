
function login(userName: string, password: string, success: Function, failure: Function) {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}

login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

login('xrer', 'adsfsf', function (status) {
    console.log(status)
}, function (err) {
    console.log(err)
})

