const nums=[1,2,3,4,5,6,7,8,9,10]

//filter

let newNum=nums.filter((num)=>(num>4))
// console.log(newNum);

//map
let newNums=nums.map((num)=> num+10)

//chaining
 newNums =nums.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>40)


// console.log(newNums);\


///Reduce 

// const myTotal=nums.reduce(function (acc, curr){
//     console.log(`acc : ${acc} curr: ${curr}`);
//     return acc+curr
// },0) 

// with arrow funtion

const myTotal=nums.reduce((acc,curr)=> acc+curr ,0)

console.log(myTotal);



