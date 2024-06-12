async function WeatherReport() {
    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("45 Deg")
        }, 3000)
    })

    let KanpurWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 Deg")
        }, 5000);
    })

    console.log("Fetching the delhi weather please wait")
    let DelhiW = await DelhiWeather
    console.log("Weather of Delhi is " + DelhiW)


    console.log("Fetching the Kanpur weather please wait")
    let KanpurW = await KanpurWeather
    console.log("Weather of Kanpur is " + KanpurW)

}

WeatherReport()