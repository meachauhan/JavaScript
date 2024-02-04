const promiseOne=new Promise(function(resolve,reject){
    //Do Async tasks
    //DB requests, Cryptography related tasks

    setTimeout(()=>{
        console.log("Executing promise one ");
        resolve()
    },1000)
})

promiseOne.then(function (){
    console.log("PromiseOne completed");
})

new Promise(function(resolve,reject){
    //Do Async tasks
    //DB requests, Cryptography related tasks

    setTimeout(()=>{
        console.log("Asnyc task 2 completed ");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 resolved");
})


const promiseThree=new Promise(function(resolve,reject) {

    setTimeout(function() {
       resolve({username:'Akash',email:"akash@google.com"}) 
        
    },1000)
})

promiseThree.then(function(result){
    console.log(result);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Akash", password:"akash@akas.com"})
        }else{
            reject("ERROR: DATA NOT FOUND")
        }

    },1000)
})

promiseFour.then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})


//Chaining

promiseFour.then((response)=>{
    return response.username;
}).then((name)=>{
    console.log(name);
}).catch((err)=>{console.log(err)})


//Async Await

const promisFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Akash", password:"akash@akas.com"})
        }else{
            reject("ERROR: DATA NOT FOUND")
        }

    },1000)
})

async function reslovePromiseFive(){
    try {
        const response=await promisFive
        console.log("Promise resolve using await")
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
reslovePromiseFive();


async function getAllUsers(){

    try {
        const response=await fetch('https://randomuser.me/api/')

        const result=await response.json()
    
        console.log(result);
    } catch (error) {
        
        console.log(error);
    }
     
}

getAllUsers()


//Same by using then

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json();
})
.then((result) => {
    console.log("===>API call by .then method<======");
    console.log(result);
})
.catch((err) => { console.log(err); })

