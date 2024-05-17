// const coding = ["js","ruby","c++","java","python","rust"]


// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })


// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=>{
//     return num > 4;
// })


// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num);
//     }
// })


// console.log(newNums);


const books = [
    {title:'Book One',genre:"Fiction",publish:1981,edition:2004},
    {title:'Book two',genre:"History",publish:1982,edition:2004},
    {title:'Book three',genre:"Science",publish:1983,edition:2004},
    {title:'Book four',genre:"Science",publish:1984,edition:2004},
    {title:'Book five',genre:"History",publish:1985,edition:2004},
    {title:'Book six',genre:"Fiction",publish:1986,edition:2004},
    {title:'Book seven',genre:"History",publish:1987,edition:2004},
    {title:'Book eight',genre:"Science",publish:1988,edition:2004},
    {title:'Book nine',genre:"Non-Fiction",publish:1989,edition:2004}
];


// let useBook = books.filter((bk)=>bk.genre === 'History')

// useBook = books.filter((bk)=>{
//     return bk.publish >= 1985 && bk.genre === "History"
// })
// console.log(useBook);


const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num)=>num+10)

console.log(newNums);



// forEach
// filter
// Map