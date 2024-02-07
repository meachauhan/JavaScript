function SetUserName(username){
    this.username=username
    console.log("Called");
}


function SetUser(username,email,password){
    // provide current execution context to function so it can use current function context. so after function finishes its exection 
    // and removed from execution context the data will not be flushed
    SetUserName.call(this,username) 
    this.email=email
    this.password=password
}

const userOne=new SetUser('Akash',"akash@akash.com","akash3123")
console.log(userOne);