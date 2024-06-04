// javascript is synchronous , singleThreaded language
// execution context => each opertatiojnwait for the last one to complete execution


const saySushil = function(){
    console.log("sushil ");
}

setTimeout(saySushil,2000)