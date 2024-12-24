
//class based inhiertance

class Account {
    constructor() {
        console.log('Account')
    }
    protected deposit():number{
        return 100
    }
}
class SavingsAccount extends Account {
    constructor() {
        super() //calling parent class constructor
        console.log('Savings Account')
    }
    deposit(): number {
        return 1000
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())