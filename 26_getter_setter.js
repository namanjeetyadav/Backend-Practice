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
