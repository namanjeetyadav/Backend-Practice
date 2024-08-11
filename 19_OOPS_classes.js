class railwayForm {
    submit(){
        alert(this.name + " your form is submitted and Train number is : " + this.trainno)
    }

    cancel(){
        alert(this.name + " your form is cancelled and your Train number is : " + this.trainno)
    }

    fill(givenname, trainno){
        this.name = givenname
        this.trainno =  trainno
    }
}

// creating
let namanForm = new railwayForm()
// Giving value
namanForm.fill("Naman", 123456)

// creating two
let amanForm1 = new railwayForm()
let amanForm2 = new railwayForm()

// Giving value to both
amanForm1.fill("Aman", 222222);
amanForm2.fill("Aman", 333333);


namanForm.submit()
amanForm1.submit()
amanForm2.submit()
amanForm2.cancel()

