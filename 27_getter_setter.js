class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return `${this._email}@gmail.com`
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `We dont share our password`
    }

    set password(value) {
        this._password = value
    }
// 
}

const e = new User("naman", "mypasscode")
console.log(e.email);
console.log(e.password);
