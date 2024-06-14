try {
    let age = prompt("Enter the correct age")
    if (age >= 120) {
        throw new Error("The age is maybe incorrect")
    }
}
catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("The script is running")