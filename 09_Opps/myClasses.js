class User{
    constructor(username,email,password){
        this.username=username
        this.password=password
        this.email=email
    }


    getEncryptedPassword(){
        
       this.password=this.password.length*20+this.password.toUpperCase()
        return `Encrypted Password is: ${this.password}`
    }

}

const userOne=new User('Akash','akash@akash.com','akash1231')
console.log(userOne.getEncryptedPassword());

//Behind the scene

function Users(username,email,password){
    this.username=username
    this.password=password
    this.email=email
}

Users.prototype.getEncryptedPassword=function(){
    this.password=this.password.length*20+this.password.toUpperCase()
    return `Encrypted Password is: ${this.password}`
}

const userTwo=new Users('Akash','akash@akash.com','akash1231')
console.log(userTwo.getEncryptedPassword());