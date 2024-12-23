class Employee {
    //declare variables
    id: number 
    name: string 
    status: boolean
    //constructor
    constructor(){
      //initalize inside constructor
      this.id = 1
      this.name='Subramanian'
      this.status = true
    }

    //instance methods
}
let employee = new Employee()
//access object properties
console.log(`id ${employee.id}`)
console.log(`Name ${employee.name}`)
console.log(`status ${employee.status}`)