//   Exersice 5 
// Write a javascript program to pretend to look like a hacker. Write an async function which will simply display following output.
// 1. Initializing Hack program
// 2. Hacking Rahul username
// 3. Username found rahul01
// 4. Connecting to facebook


let a = [
    "Initializing Hack program",
    "Hacking Rahul username",
    "Username found rahul01",
    "Connecting to facebook",
    "Rahul has been hacked"
]


const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)

        }, seconds * 1000)
    })
}

const showHack = async (message) => {
    await sleep(2)
    console.log(message)
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
    }
})()