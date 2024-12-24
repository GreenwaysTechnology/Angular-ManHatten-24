
function blockMe(message) {
    console.log(message)
}
function sayHello(callback) {
    setTimeout(callback,2000,'Hello')
    // setTimeout(function () {
    //     callback('Hello')
    // }, 3000)
}

function main() {
    blockMe('start')
    sayHello(function (message) {
        console.log(message)
    })
    blockMe('end')
}
main()