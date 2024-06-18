// ProtoType in javascript

function multipleby5(nums){
   return nums*5
}



multipleby5.power = 2


console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);

function createUser(username,score){
     this.username = username
     this.score = score
}


createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printme()