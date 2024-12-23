
class UserService {
    constructor() {
        console.log('UserService is invoked')
    }
    login() {
        return "login success"
    }
}

class UserController {
    //dependency 
    public userService: UserService
    constructor(userService: UserService) {
        this.userService = userService
    }
    public auth(){
        return this.userService.login()
    }
}
// let userService = new UserService()
// let userController = new UserController(userService)
// console.log(userController.auth())

let userController = new UserController(new UserService())
console.log(userController.auth())