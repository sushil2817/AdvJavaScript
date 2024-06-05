// javascript is synchronous , singleThreaded language
// execution context => each opertatiojnwait for the last one to complete execution


const saySushil = function(){
    console.log("sushil ");
}
const changeText =()=>(document.querySelector('h1').innerHTML = "This is javascript")

const changeMe = setTimeout(changeText,2000)
 
document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(changeMe)
    console.log('Stopped');
})