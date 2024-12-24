import { UserService } from "../services/User.service.js";

export class UserController {
    constructor(private userService: UserService) { }

    public init() {
        console.log(this.userService.findAll())
    }
}