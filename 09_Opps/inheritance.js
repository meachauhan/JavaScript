class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Developer extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    codeStatus(){
        console.log(`A new code is added by ${this.username}`);
    }
}

const user1=new Developer('Akash','akash@akash.com',"aksdhf")
user1.codeStatus()
user1.logMe()

const user2=new User("thtiu")
user2.logMe()

console.log(user1 instanceof Developer);

console.log(user1 instanceof User);

console.log(user2 instanceof Developer);

console.log(user2 instanceof User);


