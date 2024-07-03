// obj base get and set

const User = {
    _email:'s@sk.com',
    _password:'abc',


    get email(){
        return this._email.toUpperCase()
    },

    set email(email){
            this._email = value
    }
}


const tea = Object.create(User)
console.log(tea.);
