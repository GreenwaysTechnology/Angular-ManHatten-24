class Employee {
    //declare variables
    public id: number
    public name: string
    public status: boolean
    //constructors variables are local variable
    constructor(id: number = 0, name?: string, status: boolean = false) {
        this.id = id
        this.name = name
        this.status = status
    }

}
let employee = new Employee(1, 'Subramanian', true)
//access object properties
console.log(`id ${employee.id}`)
console.log(`Name ${employee.name}`)
console.log(`status ${employee.status}`)
