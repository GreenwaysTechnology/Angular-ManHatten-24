
function login(success) {
    success('login is success')
}

login(function (status) {
    console.log(status)
})

let myFun = function (status) {
    console.log(status)
}
login(myFun)