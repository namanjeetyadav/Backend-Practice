setTimeout(() => {
    console.log("Fetching data 1")
}, 1000);

try {
    console.log(data)
} catch (err) {
    console.log("This is error " + err)
}

setTimeout(() => {
    console.log("Fetching data 2")
}, 2000);

setTimeout(() => {
    console.log("Fetching data 3")
}, 3000);


// Note try catch will catch the synchronous code not asynchronous code

//For asynchronous code put try catch inside it 