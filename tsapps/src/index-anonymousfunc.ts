//anonymous function

let hello = function () {
    console.log('hello')
}
//invoke function
hello()

//anonymous with args and parameter
let add = function (a: number = 0, b: number = 0): number {
    return a + b
}
console.log(add(10,10))