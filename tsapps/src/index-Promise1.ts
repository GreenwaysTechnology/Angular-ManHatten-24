
//Promise factory api
function blockMe(message) {
    console.log(message)
}

function getValue(): Promise<string> {
    return Promise.resolve('hello')
}

function main() {
    blockMe('start')
    getValue().then(res => console.log(res)).catch(err => console.log(err))
    blockMe('end')
}
main()