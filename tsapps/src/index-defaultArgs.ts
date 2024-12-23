
//es 6 default args
function multiply(a: number = 0, b: number = 0): number {
    return a * b
}
console.log(multiply(10, 10))
console.log(multiply())