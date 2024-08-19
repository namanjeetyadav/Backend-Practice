class Emplyoee {
    login(){
    console.log("Employee has logged in");
    }

    logout(){
        console.log("Employee has logged out");
    }

    attendence(total_attendence){
        console.log(`${total_attendence + 1} This is the attendence of Employee`)
}
}

class Programmer extends Emplyoee{
    attendence(){
        super.attendence(4)
        // Even after overwriting the super is used to use the method of parent class 
        // super.methodName() 
        console.log("one extra attendence granted")
    }
}

let emp1 = new Programmer()

emp1.login()
emp1.attendence()