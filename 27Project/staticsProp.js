class User{
    constructor(username){
         this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
       
    static createId(){
        return `123`
    }
}

const sushil = new User("sushil")
// console.log(sushil.createId())

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.createId());