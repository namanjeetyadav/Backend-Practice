// Method to add two complex number 

// class Complex {
//     constructor(real, imaginary) {
//         this.real = real
//         this.imaginary = imaginary
//     }

//     add(num){
//         this.real = this.real + num.real
//         this.imaginary = this.imaginary + num.imaginary
//     }
// }

// let a = new Complex(4,2)
// let b = new Complex(6,2)

// a.add(b)

// console.log(`${a.real} + ${a.imaginary}i`)


// Create a class student from a class human, override a method and see changes

class Human {
    constructor(name) {
    this.name = name;
    
    }

    breath() {
        console.log("Human can breath")
    }

    walk() {
        console.log("Human can walk")
    }
}

class Student extends Human {
    walk() { console.log(`${this.name} - Student can walk fast than human`) }
}

let o = new Student("Naman")
o.walk()