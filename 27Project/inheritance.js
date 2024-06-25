class User{

    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username} `);
    }
}

const customer = new Teacher("chai","chat@mgail.com","123")

customer.logMe()

const masalaChai = new User("masalaChai")
// masalaChai.addCourse()
masalaChai.logMe()

console.log(customer instanceof Teacher);
console.log(customer instanceof User);