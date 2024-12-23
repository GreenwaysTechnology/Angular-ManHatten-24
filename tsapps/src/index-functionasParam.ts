function add(a, b) {
    let c = a + b
    console.log(c)
}
add(10, 10)
let x = 10
let y = 90
add(x, y)


function login(success) {
    success()
}

login(function () {
    console.log('login is success')
})

let myFun = function () {
    console.log('login is success')
}
login(myFun)