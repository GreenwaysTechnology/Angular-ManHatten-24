
//Promise factory api
function blockMe(message) {
    console.log(message)
}

function getError(): Promise<string> {
    return Promise.reject('oops')
}

function main() {
    blockMe('start')
    getError().then(res => console.log(res)).catch(err => console.log(err))
    blockMe('end')
}
main()