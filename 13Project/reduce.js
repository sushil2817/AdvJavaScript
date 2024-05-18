const myNums = [1,2,3,]

// const myTotal = myNums.reduce((acc,currval)=>{
//     console.log(`acc->${acc} currval->${currval}`)
//     return acc+currval
// },3)

const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:9999
    },
    {
        itemName:"Mobilw course",
        price:5999
    },
    {
        itemName:"Data Scientice course",
        price:12999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc+item.price),0)

console.log(priceToPay);