const BASE_URL = `https://api.coinconvert.net/convert/btc/usd?amount=1`



const dropdown = document.querySelectorAll(".all-select select")

for (let select of dropdown) {
    for (let cryptoCurr in cryptoList) {
        let newOption = document.createElement("option")
        newOption.innerText = cryptoList[cryptoCurr].toUpperCase();
        // cryptoList[cryptoCurr].toUpperCase(); 
        newOption.value = cryptoCurr;

        select.append(newOption);
    }

}




