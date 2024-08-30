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
