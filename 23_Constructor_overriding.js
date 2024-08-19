class Employee{

    constructor(name){
        console.log(`${name} - Employee Constructor is here`)
    }
    login(){
        console.log("Employee is logged in")
    }

    logout(){
        console.log("Employee id logged out")
    }

    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves + 1} leaves - and approved` )
    }
}

class Programmer extends Employee {
    requestCoffee(x){
        console.log(`Employee requested ${x} number of coffee`)
    }

    requestLeaves(){
        super.requestLeaves(4)
        console.log("One extra leave is granted")
    }
}

let emp1 = new Programmer("Naman")
emp1.login()
emp1.requestLeaves()