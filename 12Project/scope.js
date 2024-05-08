// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}



// console.log(a);
// console.log(b);
// console.log(c);

// nested scope

function one(){

    const username = "sushil"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two();
}
// one()


if(true){
    const username = "Sushil"
    if(username === "Sushil"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++ interesting +++++++++++++++++

addOne(5);
function addOne(value){
    return value++;
}



addTwo(5)
const addTwo = function(num){
    return num+2;
}
