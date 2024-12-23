class Employee {
    //instance variables
    id: number = 0
    name: string = 'subramaian'
    status: boolean = true
    //constructor

    //instance methods
}

//create instance

//let is keyword
//employee is just variable - reference variables which points object location
//new is memory allocation operator
//Employee() is constructor call
let employee = new Employee()
//access object properties
console.log(`id ${employee.id}`)
console.log(`Name ${employee.name}`)
console.log(`status ${employee.status}`)