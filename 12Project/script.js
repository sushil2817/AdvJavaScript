// function sayMyName(){
//     console.log("S");
//     console.log("U");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("L");
// }

// sayMyName()

function addTwoNumbers(number1,number2){
     return number1+number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ",result);



function loginUserMessage(username){
    if(!undefined){
           console.log("please enter a name");
           return
    }
    return  `${username} just logged in`
}

console.log(loginUserMessage())
