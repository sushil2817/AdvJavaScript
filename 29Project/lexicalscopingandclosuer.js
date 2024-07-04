// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//     console.log(name); 
//     }
//     displayName();
// }
// init();


function outer(){
    let username = "sushil"
    function inner(){
        console.log(username);
    }
}
outer( )
console.log("TOO Outer", username);
