// function init() {
//     let name = "Mozilla";
//     function displayName() {
//     console.log(name);
//     }
//     displayName();
// }
// init();

// --------------- lexical scoping -------------
function outer() {
  let username = "sushil";
  console.log(secret);
  function inner() {
    let secret = "my123";
    console.log("inner", username);
  }
  function innerTwo() {
    console.log("innerTwo", username);
    // console.log(secret);
  }
  inner();
  innerTwo();
}
outer();
// console.log("TOO Outer", username);

// -------------------- closur---------------

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//     console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();
