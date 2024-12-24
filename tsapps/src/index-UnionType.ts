
let a: number | string
a = "19"
a = 10
//a = true
//union type allows specifivalues
let gender: "Male" | "Female" | "Third"

gender="Male"

//gender="test"

function Mode(varient: "dark" | "light") {
    console.log(varient)
}
Mode("dark")
Mode("light")
//Mode("asdfsadf")
function Person(gender: "Male" | "Female" | "Third" | undefined, active: true | false) {
    console.log(gender, active)
}
Person("Female", true)
Person("Male", false)