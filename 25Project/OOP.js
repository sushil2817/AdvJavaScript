const user = {
    username: "sushil",
    loginCount:8,
    signedIn:true,

    getUSerDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUSerDetails());
// console.log(this);

function User(username,loginCount,isLogggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = isLogggedIn 

    // return this
}

const userOne = new User("sushil",24,true)
const userTwo = new User("chai aur code",11,false)
console.log(userOne);
console.log(userTwo);
