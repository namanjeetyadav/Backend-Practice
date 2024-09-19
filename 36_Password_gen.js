class generatePassword {
    constructor() {
        console.log("Welcome to Password Generator")
        this.pass = "";
    }

    generator(len) {
        let char = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let special = "!@#$%^&*()_+";

        if (len < 5) {

            console.log("Your password is too short")

        }
        else {
            let i = 0
            while (i < len) {
                this.pass += char[Math.floor(Math.random() * char.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            this.pass = this.pass.substr(0, len);
            return this.pass
        }
    }

}
takeLength = prompt("Enter the length of the password:");
let p = new generatePassword()
let result = p.generator(takeLength);

console.log(result);
document.getElementById("result").innerText = result;

