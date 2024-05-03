// Dates
// Date is an object
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


let CreatedDate = new Date("2024-07-17")
// console.log(CreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(CreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));




let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());

let newDate1 = newDate.toLocaleString('default',{
    weekday:"short",
    timeZone:'IST',
    day:"2-digit",
    month:"long",
    year:"numeric"

})
console.log(newDate1);


