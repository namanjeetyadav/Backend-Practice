let P1 = new Promise((resolve, reject) => {
    resolve(55)

})

P1.then((value) => {
    console.log(value)
    return P2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 2000)
    })
})

    .then((value) => {
        console.log("we are done " + value)

    })