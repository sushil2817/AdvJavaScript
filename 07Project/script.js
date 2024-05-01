// Two types of memories
// Stack(Primitive) when you got Stack memoru you got copy
//Heap(Non-Primitive) when you got Heap Memory you got original value

let ytSushil = "sushil@example.com"

let anothername = ytSushil
anothername = "sushilkumawat"

console.log(ytSushil);
console.log(anothername);

let userOne = {
    email:"user@example.com",
    upi: "user@ybl"
}

let  userTwo = userOne
console.log(userTwo);
userTwo.email = "user@microsoft.com"
console.log(userOne);
console.log(userTwo);