class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }

    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}