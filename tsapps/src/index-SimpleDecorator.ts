//declare decorator

function Course(target: any) {
    //logic
    Object.defineProperty(target.prototype, "course", { value: 'Typescript' })
}

@Course
class Student {
   constructor(public name:string=""){}
}
let student = new Student("Ram") as any
console.log(`${student.name} is learning ${student.course}`)