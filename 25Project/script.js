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
       },3000)
})

promiseFive.then()