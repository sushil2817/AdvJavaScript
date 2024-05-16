const arr = [1,2,3,4,5,6]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!";
for (const greet of greetings) {
     console.log(greet);
}



const map = new Map()
map.set("IN","India")
map.set("US","United Stated of AMerica")
map.set("Fr","France")
map.set("US","United Stated of AMerica")

// console.log(map);

for(const [key,value] of map){
    // console.log(key);
    // console.log(value);
    console.log(key," :- ",value);
}




const myObject = {
    js: 'javascript',
    cpp : "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
     console.log(`${key} for short name for : ${myObject[key]}`);
}


const programming = ["js", "rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}



map pr for in off loop use nhi kr skte


const map = new Map()
map.set("IN","India")
map.set("US","United Stated of AMerica")
map.set("Fr","France")
map.set("US","United Stated of AMerica")

for(const key in map){
     console.log(key);
// }


const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (item)=>{
    console.log(item);
} )


function printMe (item){
    console.log(item);
}

coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
   
})

