const marvelHeros = ["thor","ironeman","spiderman"]
const dcHeros = ["superman","batman","flash"]


// marvelHeros.push(dcHeros)

// console.log(marvelHeros);// array in array

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]

// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,5,4,3,]]]


const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


console.log(Array.isArray("Sushil"));
console.log(Array.from("Sushil"));
console.log(Array.from({name:"Sushil"}));//intresting Question in Array for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))