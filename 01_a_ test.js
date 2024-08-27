let number = prompt("Enter the number ");
let base = prompt("Enter no doesnt share factor with N:");
let exponent = 1;

while (true) {
    let result = base ** exponent;
    let remainder = result % number;

    console.log(`8^${exponent} = ${result} % ${number} = ${remainder}`);

    if (remainder === 1) {
        console.log(`The smallest exponent n such that ${base}^n = ${result} % number ${number} = 1 is ${exponent}`);
        break;
    }
    exponent++;
}
