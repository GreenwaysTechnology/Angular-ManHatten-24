//declare decorator with input

function Course(subject: string) {
    //decorator logic : higher order function : you have to return function
    return function (target: any) {
        Object.defineProperty(target.prototype, "course", { value: subject })
    }
}

@Course('Angular')
class Student {
    constructor(public name: string = "") { }
}
let student = new Student("Ram") as any
console.log(`${student.name} is learning ${student.course}`)