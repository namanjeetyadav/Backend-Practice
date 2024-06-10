let MyPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise is resolved successfully")
    }
    else {
        reject("Promise is rejected")
    }
});

MyPromise.then(result => {
    console.log(result)
})

    .catch(error => {

        console.error(error);
    })