mainFunction = (callback) => {

    console.log("Fetching data")
    const randomNumber = Math.floor(Math.random() * 5000) + 1;
    setTimeout(() => {
        let data = { name: 'naman', age: 20 }
        console.log(data);
        callback()

    }, randomNumber)

    console.log("Checking program flow")
}

callbackFunction = () => {
    console.log("Data has been fetched")
}

mainFunction(callbackFunction)