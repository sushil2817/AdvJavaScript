
const sayDate = function (str){
    console.log(str,"sushil",Date.now());
}

const inetervalID = setInterval(sayDate,2000,"hi")
    


clearInterval(inetervalID)