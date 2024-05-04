// const tinderUser = new Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = 'Sammy'
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userName:{
        firstName:"Sushil",
        middleName :"Kumar",
        lastName:"Kumawat" 
     }
   }
}
// console.log(regularUser.fullName.userName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {  id:1,
        email:"s@gmail.com"
    },
    {  id:1,
        email:"s@gmail.com"
    },
    {  id:1,
        email:"s@gmail.com"
    },
    {  id:1,
        email:"s@gmail.com"
    },

]

// console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));