class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    //Restrict the access
    static createId(){
        return '123'
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

user1.createId() //Can't acccess (Error: createId is not a fucntion)

const user2=new User("thtiu")
user2.logMe()

user2.createId() //can't Access (Error: createId is not a fucntion)



