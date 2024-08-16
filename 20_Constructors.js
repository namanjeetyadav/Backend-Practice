class railwayForm {
    constructor(givename, trainno, address) {
        console.log("CONSTRUCTOR CALLED")
        this.name = givename;
        this.trainno = trainno;
        this.address = address;
    }

    preview() {
        alert("Hey, " + this.name + " this is your form details: " + "Train Number: " + this.trainno + " Address: " + this.address)


    }
    submit() {
        alert("Hey, " + this.name + " this form is submitted,  form details: " + "Train Number: " + this.trainno + " Address: " + this.address)
    }

    cancel() {
        alert("This from is cancelled")
    }

}

let namanForm = new railwayForm("Naman", "125680", "Kalyanpur Kanpur")
let amanForm = new railwayForm("Aman", "125680", "Kalyanpur Kanpur")

namanForm.preview()
namanForm.submit()
amanForm.preview()
amanForm.submit()