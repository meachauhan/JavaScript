
//Object literals
const user={
    username:"Akash",
    loginCount:9,
    isSignedIn: true,

    getUserDetails: function(){
        console.log(`[Username: ${this.username},loginCount: ${this.loginCount},SignedIn: ${this.isSignedIn} ]`);
    }
}

console.log(user.getUserDetails());


//Constructor 
//Function Name must start with apital letter
//new keyword Give new intsance of function
function User(username,loginCount,isLoggedIn){

    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

const userOne=new User('Akash',23,true)
const userTwo=new User('Tommy',23,true)
console.log(userOne.constructor); //refrence itself
console.log(userTwo);

