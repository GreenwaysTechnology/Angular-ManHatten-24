import { UserController } from './controllers/User.controller.js';
import { UserService } from './services/User.service.js';
function main() {
    var usrCtrl = new UserController(new UserService());
    usrCtrl.init();
}
main();
