
class UserService {
    constructor() {
        console.log('UserService is invoked')
    }
    login(){
        return "login success"
    }
}

class UserController {
    //dependency 
    public userService:UserService
    constructor() {
        console.log('User controller is invoked')
    }
}
let userService = new UserService()
let userController = new UserController()
userController.userService = userService
console.log(userController.userService.login())
