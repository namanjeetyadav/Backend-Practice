// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json"

const dropdown = document.querySelectorAll(".all-select select")

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select")

const toCurr = document.querySelector(".to select")

for (let select of dropdown) {
    for (let curr in countryList) {
        let newOption = document.createElement("option")
        newOption.innerHTML = curr;
        newOption.value = curr;
        if (select.name === "from" && curr === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && curr === "INR") {
            newOption.selected = "selected"
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;

}

// const URl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currCode}.json`


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}




btn.addEventListener("click", (evt) => {
    evt.preventDefault();  //Restrict the default behaviour of form to refresh the page while submission.
    let amount = document.querySelector(".amount input")
    let amountValue = amount.value;
    if (amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1";
    }
    updateExchangeRate();

});

console.log(fromCurr.value, toCurr.value);



