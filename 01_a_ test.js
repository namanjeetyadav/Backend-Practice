class GeneratePassword {
    constructor() {
        console.log("Welcome to Password Generator");
        this.pass = "";
    }

    generator(len) {
        if (isNaN(len) || len < 5) {
            this.pass = "Your password length should be a number greater than or equal to 5";
            document.getElementById("result").innerText = this.pass;
            console.log(this.pass);
            return;
        }

        let char = "abcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let special = "!@#$%^&*()_+";
        let allChars = char + numbers + special;

        while (this.pass.length < len) {
            this.pass += allChars[Math.floor(Math.random() * allChars.length)];
        }
        this.pass = this.pass.substr(0, len);

        return this.pass;
    }
}

let takeLength = prompt("Enter the length of the password:");
takeLength = parseInt(takeLength, 10);  // Convert input to integer

let p = new GeneratePassword();
let result = p.generator(takeLength);

console.log(result);
document.getElementById("result").innerText = result || "Password generation failed";

