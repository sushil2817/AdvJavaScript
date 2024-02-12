// fetch('https://something.com').then().catch().finally();

const promisOne = new Promise((res,rej)=>{
      //  Do an async task
      // DB calls, cryptography,network
      setTimeout(()=>{
        console.log("async task is complete");
        res()
      },1000)
})

promisOne.then(()=>{
  console.log("Promis consumed");
})

new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("task2");
      res()
    },1000)
}).then(()=>{
  console.log("async two resolve");
})

const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("this task 3");
      res({username:'chai',email:"chai@example.com"})
    },1000)
})

promiseThree.then((user)=>{
       console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          let error = false;
          if(!error){
            resolve({username:"sushil",password:"12345"})
          }else{
            reject('Error: Something went wrong')
          }
        },1000)
}) 

const username = promiseFour
.then((user)=>{
        console.log(user);
        return user.username
})
.then((myusername)=>{
           console.log(myusername);
})
.catch((err)=>{
    console.log(err);
}).finally(()=>{
  console.log('Finally the promis is either resoves else rejected');
})

const promiseFive = new Promise((res,rej)=>{
    
  setTimeout(()=>{
       let error = true
       if(!error){
        res({username:"javascript",password:"1234"})
       }else{
        rej('Error:JS went wrong')
       }
     },1000)
})



async function consumePromiseFive(){
    try {
      const response = await promiseFive
      console.log(response);
    } catch (error) {
      console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//         console.log('E: ', error);
//    }
// }

// getAllUsers()


fetch('https://api.github.com/users/sushil2817')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
  console.log(error);
})
// console.log(username);

