class Employee {
    constructor (name){
        console.log(`${name} - Employee's constructor is here`)
    
    this.name = name
    }


login() {
    console.log(`Employee has logged in`)
}

logout() {
    console.log(`Employee has logged out`)
}

requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - Auto approved`)
}
}

class Programmer extends Employee {
    constructor(name){
        super(name)
        console.log(`This is a newly written constructor`)

    }
requestCoffee(x){
    super.requestLeaves(4)
    console.log("One extra is granted")
}
}

let e = new Programmer("Naman")
e.login()
e.logout(3)