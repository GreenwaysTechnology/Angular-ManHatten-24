
function blockMe(message) {
    console.log(message)
}
function login(userName, password, resolve, reject) {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Login Success')
    } else {
        setTimeout(reject, 1000, 'Login failed')
    }
}

function main() {
    blockMe('start')
    login('admin', 'admin', (status) => {
        console.log(status)
    }, (err) => {
        console.log(err)
    })
    blockMe('end')
}
main()