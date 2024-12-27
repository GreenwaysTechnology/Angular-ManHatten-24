import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";
import { User } from "./users.type";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html',
})
export class UserComponent implements OnInit {
    //this variable is used to transfer data from controller to UI
    users!: Array<User>
    // constructor(private userservice: UsersService) { 
    //     this.users = this.userservice.findAll()
    // }
    // constructor(private userservice: UsersService) {
    //     //async
    //     this.userservice.findAll((users: User[]) => {
    //         this.users = users
    //     }, (err: any) => {
    //         console.log(err)
    //     })
    // }
    // constructor(private userService: UsersService) {
    //     //then and catch
    //     this.userService.findAll().then(users => {
    //         this.users = users 
    //      }).catch(err => {
    //         console.log(err)
    //     })
    // }


    constructor(private userService: UsersService) {
        // this.fetchUsers()
    }
    ngOnInit() {
        this.fetchUsers()
    }
    private async fetchUsers() {
        try {
            //   const users = await this.userService.findAll()
            this.users = await this.userService.findAll()
        }
        catch (err) {
            console.log(err)
        }
    }
    ngOnDestroy() {
        console.log('Component destroyed');
    }



}