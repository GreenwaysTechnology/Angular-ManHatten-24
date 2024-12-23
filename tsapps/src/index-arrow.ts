//es 5 style 
let hello = function () {
    console.log('hello')
}
//es 6 style : arrow
let hai = () => {
    console.log('hi')
}
hai()

//if function has single line of body: you can remove {}
hai = () => console.log('hi')
hai()

//arrow and parameters and args
let add = (a: number = 0, b: number = 0) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)

//return
add = (a: number = 0, b: number = 0): number => {
    return a + b
}
add(10, 10)

//if function returns only return statement: we can remove {} and return keywor
add = (a: number = 0, b: number = 0): number => a + b

add(10, 10)