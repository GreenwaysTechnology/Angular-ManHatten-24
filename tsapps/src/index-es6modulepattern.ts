import { UserController } from './controllers/User.controller.js'
import { UserService } from './services/User.service.js'

function main() {
    //create controller object
    let usrCtrl = new UserController(new UserService())
    usrCtrl.init()
}
main()