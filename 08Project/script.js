const name = "sushil"
const repoCount = 25

// console.log(name+repoCount+" Value")


console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);

const gameName = new String('Sushil-Coder-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,4);
console.log(anotherString);


const newString1 = "    sushil   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://sushil.com/sushil%20kumawat"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log((gameName.split('-')));