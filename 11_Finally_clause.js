try {

    let a = 0;

} catch (err) {
    console.log("This is an error")
    console.log(b)     //Error in catch
}

finally{
    console.log("This will always run")
}

// Note: You are catching a error but in catch there is also an error but finally will run, still if there an error in catch. 