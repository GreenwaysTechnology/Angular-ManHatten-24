interface Flyable {
    fly(): string
}
interface onInit {
    init(): void
}
class Bird implements Flyable, onInit {
    fly(): string {
        return "Bird is flying"
    }
    init(): void {
        console.log('init is called')
    }
}
class Airplane implements Flyable {
    fly(): string {
        return "AirPlane is flying"
    }
}
let bird = new Bird()
console.log(bird.fly())
bird.init()


let air = new Airplane()
console.log(air.fly())