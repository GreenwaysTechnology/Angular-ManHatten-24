import { Injectable } from "@angular/core";
import { USERS } from "./users.mock";
import { User } from "./users.type";

@Injectable()
export class UsersService {
    constructor() { }
    //biz methods
    //sync 
    // findAll(): Array<User> {
    //     return USERS
    // }
    //async pattern: callbacks
    // findAll(resolve: any, reject: any) {
    //     setTimeout(resolve, 5000, USERS)
    // }
    findAll(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, USERS)
        })
    }
}