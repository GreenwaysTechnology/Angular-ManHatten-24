abstract class Animal {
    abstract eat(): string
    saveAnimals(): void {
        console.log('Save animals from the hunter')
    }
}
class Tiger extends Animal {
    eat(): string {
        return 'tiger hunts other animals'
    }
}
let tiger = new Tiger()
console.log(tiger.eat())
tiger.saveAnimals()