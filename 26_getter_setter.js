class Animal {
    constructor(name) {
        this._name = name
    }

    fly() {
        console.log("Hello world")
    }
    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }
}

class Rabbit extends Animal {
    eat() {
        console.log("eating carrot")
    }
}

let a = new Rabbit("Oreo")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)

let c = 56;
console.log(a instanceof Animal)
console.log(a instanceof Animal)
console.log(c instanceof Animal)
