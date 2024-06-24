// let myName = "sushil     "

// console.log(myName.trueLength);



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power id ${this.spiderman}`);
    }
}

Object.prototype.sushil = function(){
    console.log(`Sushil is present in all objects`);
}

Array.prototype.heySushil = function(){
    console.log(`Sushil says hello`);
}

heroPower.sushil()
myHeros.heySushil()
// heroPower.heySushil()

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
     makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sushil".trueLength()
"iceTea".trueLength()