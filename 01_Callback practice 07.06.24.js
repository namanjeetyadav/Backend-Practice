function MainFunction(callback) {
    console.log("Task is pending")

    setTimeout(function () {
        console.log("Your task has been completed")
        callback()
    }, 3000)
}

callbackFunction = () => {
    console.log("result")
}

MainFunction(callbackFunction)

OtherFunction = () => {
    console.log("Check the flow")
}

OtherFunction()



// SECOND PROGRAM
// firstCallback = (callback) => {
//     setTimeout(function () {
//         console.log("Hello Rahul")
//     }, 3000)
//     callback()
// }

// secondCallback = (callback) => {
//     setTimeout(function () {
//         console.log("Scaning rahul's mobile ")
//     }, 3000)
//     callback()
// }

// thirdCallback = (callback) => {
//     setTimeout(function () {
//         console.log("Fetching Rahul's ID password")
//     }, 3000)
//     callback()
// }

// firstCallback(function () {
//     secondCallback(function () {
//         thirdCallback(function () {

//         })
//     })
// })