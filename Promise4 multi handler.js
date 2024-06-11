let myPromise1 = new Promise((resolve, reject) => {
    console.log("Promise 1 is pending ")

    setTimeout(() => {
        resolve(55)
    }, 3000)
})

myPromise1.then((value) => {
    setTimeout(() => {
        console.log("Promise 1 is resolved with " + value)
    }, 3000)
})

myPromise1.then(() => {
    console.log("Promise 1 resolve ho gayi hai")
})

