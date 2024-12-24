enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Up)

enum UserResponse {
    No = 0,
    Yes = 1,
}
function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
}

respond("Princess Caroline", UserResponse.No);