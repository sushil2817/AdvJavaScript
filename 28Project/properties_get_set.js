// Old method  for getter and setters
// function base
function User(email,password){

    this._email = email;
    this._password = password


    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase() 
        },
        set:function(value){
            this.email = value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase() 
        },
        set:function(value){
            this.email = value
        }
    })
}

const hello = new User("hello@hello.com","hello")

console.log(hello.password);
console.log(hello.email);