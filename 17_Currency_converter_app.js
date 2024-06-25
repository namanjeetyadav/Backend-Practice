const dropdown = document.querySelectorAll(".all-select select")

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
}
