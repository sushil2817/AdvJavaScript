

const user = {
    username:"sushil",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

   
}

// user.welcomeMessage()
// user.username = "Nisha";
// user.welcomeMessage()

// console.log(this);




// function chai(){
//     let username = "sushil"
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "sushil"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) =>{
//      return num1+num2
// }

// const addTwo = (num1,num2) =>  num1+num2
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({
    username:"sushil"
})


console.log(addTwo(2,3))