//arrays without generics

// let numList:number[] = [1, "a", true]

let numList: number[] = [1, 2, 3]

//Generics symbol <>
let names: Array<string> = ["a", "b"]

interface User {
    id: string | number
    name: string
}
let users: Array<User> = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'guest' },

]
let users1: User[] = [
    { id: 1, name: 'admin' },
    { id: 2, name: 'guest' },

]

class UserService {
    // public findAll(): Array<User> {
    //     return users
    // }
    public findAll(): User[] {
        return users
    }
}