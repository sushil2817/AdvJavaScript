// Singleton
// Object.create //constructor method

// Object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"Sushil",
    "full Name":"Sushil Kumawat",
    [mySym]:"myKey1",
    agr:18,
    location:"Jaipur",
    email:"sushil@microsoft.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sushil@google.com"
// Object.freeze(JsUser)
JsUser.email = "sushil@amazone.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log(`Welcome js user, ${this.name}`);
}

console.log(JsUser.greeting());