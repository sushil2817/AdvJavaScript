class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    // getter and setters 
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sushil`
    }

    set password(password){
          this._password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(email){
        this._email = email;
    }
}

const sushil = new User("sushil@sushil.ai","abc")

console.log(sushil.password);
console.log(sushil.email);