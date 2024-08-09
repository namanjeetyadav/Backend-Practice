let first_object = {
    name: "Naman",
    lang: "Javascript",
    // run: () => {
    //     alert("Running from first_object not prototype")
    // }
}

console.log(first_object);

let p = {
    run: () => {
        alert("Running from prototype not from first_object ")
    }
}

first_object.__proto__ = p;

first_object.run()
