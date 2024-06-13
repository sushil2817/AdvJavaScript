const promisOne = new Promise((res, rej) => {
    // Do an async task
    // DB calls , cryptograohy, network call
    setTimeout(() => {
        console.log('Async task is compelete');
        res()
    }, 2000)
})

promisOne.then(() => {
    console.log("Promise consumed");
})


new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async task 2");
        res()
    }, 2000)
})
    .then(() => {
        console.log("Async2 Resolved");
    })


const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res({ username: "sushil", email: "sushil@example.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user.username);
    console.log(user.email);
})

const promiseFour = new Promise((res, rej) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            res({ username: "sushil", password: "123" })
        } else {
            rej('Error: Something went wrong')
        }
    }, 2000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log("Error: ", err);
    }).finally(()=>{
        console.log("the promise is either resolved or rejected");
    })

const promiseFive = new Promise((res,rej)=>{
       setTimeout(()=>{
        let error = true
           if(!error){
            res({username:"javascript",password:"123"})
           }else{
            rej("Error: JS went wrong");
           }
       },2000)
})

async function consumePromiseFive(){
   try {
    const response =  await promiseFive
   console.log(response);
   } catch (error) {
       console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
 
//      const data = await response.json()
//      console.log(data);
//    } catch (error) {
//        console.log("ERROR: ",error);
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/sushil2817')
.then((res)=>{
       return res.json()
})
.then((data)=>{
       console.log(data);
})
.catch((error)=>{
    console.log("ERROR: ",Error);
})