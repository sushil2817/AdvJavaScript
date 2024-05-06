// destructuring of an Object

const course = {
    coursename : "js in hindi",
    price : "999",
    teacher : "Sushil"
}

const {teacher : instructor} = course

// console.log(teacher);
// console.log(instructor);

const navbar = ({company}) =>{
  console.log(company);
}

navbar(company = "sushil");//proprs in react pass by props

// JSON

{
    "name" :"sushil",
    "coursename" : "Js in hindi",
    "price" : "free"
}

