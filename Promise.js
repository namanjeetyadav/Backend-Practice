// let myPromise = new Promise(function(resolve, reject){
//     resolve();
//     reject();
// })

// myPromise.then(
//     function(value){
//         console.log("Successful")
//     },

//     function(error){
//         console.log("error" + error)
//     }
// );




let P1 = new Promise((resolve, reject) => {

    console.log("Promise P1 is pending")

    let num = prompt("Enter 10")

    setTimeout(() => {
        // console.log("I am promise and I am fullfilled")


        if (num == 10) {
            resolve(true)
        }
        reject(new Error("I am an Error of P1"))
    }, 3000)
})

let P2 = new Promise((resolve, reject) => {
    console.log("Promise P2 is pending")

    setTimeout(() => {
        // console.log("Promise is rejected")

        reject(new Error("I am an Error"))
    }, 3000)
})

P1.then((value) => {
    console.log(value)
})

P2.catch((error) => {
    console.log("Error occured in P2")
})