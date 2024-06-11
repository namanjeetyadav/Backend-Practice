let P1 = new Promise((resolve, reject) => {

    let t1 = Math.random() * 10000
    console.log(t1)
    setTimeout(() => {
        resolve(10)

    }, t1)
})

let P2 = new Promise((resolve, reject) => {
    let t2 = Math.random() * 10000
    console.log(t2)
    setTimeout(() => {
        resolve(20)
    }, t2);
})

let P3 = new Promise((resolve, reject) => {
    let t3 = Math.random() * 10000
    console.log(t3)
    setTimeout(() => {
        resolve(30)
    }, t3)

})


P1.then((value) => {
    console.log("Promise 1 has been resolved with his " + value)
})

P2.then((value) => {
    console.log("Promise 2 has been resolved with his " + value)
})

P3.then((value) => {
    console.log("Promise 3 has been resolved with his " + value)
})

Promise.all([P1, P2, P3]).then((value)=>{
    console.log(value)
}).catch((error) =>{
    console.error(error);
});