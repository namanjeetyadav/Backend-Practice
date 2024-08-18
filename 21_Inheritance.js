class Animal {

    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(this.name + " is running");
    }

    shout() {
        console.log(this.name + "is shouting");
    }
}

class Carnivorous_animal extends Animal {
    eat_meat() {
        console.log(this.name + " is eating meat")
    }
}


let m1 = new Animal("Monkey");

let l1 = new Carnivorous_animal("Lion")

m1.run();
l1.run();
l1.eat_meat();

