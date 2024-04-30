// data type are divided basis on 
// how data store "call by value" ya "call by reference" 
//  Primitive 
// Non-Primitive

//  7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 40
const secondScore = 40.3
const name = "sushil"
const isloggin = true
const isloggOut = false
const outiseTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

const bigNumber = 34356543576654356754n



// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj", "doga"];
let myObj = {
    name:"sushil",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score); // typeof number
console.log(typeof secondScore); // typeof number
console.log(typeof name); // typeof string
console.log(typeof isloggin); // typeof boolean
console.log(typeof isloggOut); // typeof boolean
console.log(typeof outiseTemp); // typeof object
console.log(typeof id); // typeof symbol
console.log(typeof anotherId); // typeof symbol
console.log(typeof bigNumber); // typeof bigint
console.log(typeof heros);    // typeof object
console.log(typeof myObj);     // typeof object
console.log(typeof myFunction);   // typeof function