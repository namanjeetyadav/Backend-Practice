//Problem 1 Write a program to load a javascript file in a browser using Promise. Use .then() to display an alert when the load is complete


// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             resolve(src + " Done")
//         }
//         document.head.append(script)
//     })
// }
// let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")
// a.then((value) => {
//     console.log(value)
// })



// Problem 2 Write a program to load javscript file in the browser using Promise. Use async await

// const loadScript1 = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script1 = document.createElement("script")
//         script1.src = src
//         script1.onload = () => {
//             resolve(src + " Second script done")
//         }
//         document.head.append(script1)
//     })
// }
// const main2 = async () => {
//     let b = await loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")

//     console.log(b)
// }
// main2()



// Problem 3 Create a promise which rejects after 3 seconds. Use async await to get its value, use try catch to handle its error


// let p3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This is an error"))
//         }, 3000)
//     })
// }

// let a = async () => {
//     try {
//         let c = await p3()
//         console.log(c)
//     }
//     catch (err) {
//         console.log("This error has been handled")
//     }
// }
// a()

// Problem 4 Write a program using Promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await these promise one by one.
let promise1 = async => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)

        }, 3000)
    })
}

let promise2 = async => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)

        }, 2000)
    })
}

let promise3 = async => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)

        }, 1000)
    })
}


const run = async () => {
    console.time("run")
    // Here wait for each promise to fulfill
    //     let a1 = await promise1()
    //     let a2 = await promise2()
    //     let a3 = await promise3()
    //     console.log(a1, a2, a3)


    // Here each promise get fulfilled 
    let a1 = promise1()
    let a2 = promise2()
    let a3 = promise3()
    leta1a2a3 = await Promise.all([a1, a2, a3])

    console.timeEnd("run")
}

run()













