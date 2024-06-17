let apiUrl = fetch('https://goweather.herokuapp.com/weather/Curitiba')
apiUrl.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2)
})



//https://goweather.herokuapp.com/weather/{delhi}
// http://localhost:3000/weather/Curitiba
