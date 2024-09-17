const sayHello = (greeting, name) =>{
    console.log(greeting + " " + name)
}

const x = {
     name: "Naman",
     role: "JS developer",
     exp: 10,
     show: function(){
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000);
     }
}

sayHello("Hello", "Naman")
console.log(x.name, x.exp)
x.show()

// When we are using the arrow function, it take this.name automatically from its lexical parent otherwise 
// it will show a window object

// Syntax
// const x = {
//     name: "Naman",
//     role: "JS developer",
//     exp: 10,
//     show: function(){
//        setTimeout(function() => {
        // console.log(this)
        // Here this is a window function not refers to the x object but in the arrow function it 
        // refers to its lexical function
//            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//        }, 2000);
//     }
// }