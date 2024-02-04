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