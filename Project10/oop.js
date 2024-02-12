const user = {

    username:"sushil",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details form database");
        // console.log(`username: ${this.username }`);
        // console.log(this);
    }
}

const user2 = {

    username:"sushil",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details form database");
        // console.log(`username: ${this.username }`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promis = new Promise()
// const date = new Date()

function User(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.gerrting = function(){
        console.log(`Welcome ${this.username}`);
    } 


    return this
    // implicityly define
}

const userOne = new User('sushil',10,true)
const userTwo = new User('chaiaurcode',11,false)
console.log(userOne.constructor);
// console.log(userTwo);