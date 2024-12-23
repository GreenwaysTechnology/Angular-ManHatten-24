
class Auth {
    private userName: string
    private password: string
    constructor() {
        this.userName = 'admin'
        this.password = 'admin'
    }
    private login(){
        return true
    }
}
let auth = new Auth()
console.log(auth.userName)
console.log(auth.login())