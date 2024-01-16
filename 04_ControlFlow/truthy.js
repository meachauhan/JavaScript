
// falsy values:
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. null
// 6. NaN
// 7. undefined
// 8. ""

// truthy values:
// 1. "0"
// 2. 'false'
// 3. " "
// 4. [] ,{}
// 5. function  () {}

// Nullish Coalescing Operator (??)
let val1
// val1= 5??10
//val1= null??10 //Null safety checks
//val1=undefined??10
 val1=null ??10??20
console.log(val1);


//Terniary Operator
// condition ? ture : false

const price=100
price >=80 ? console.log("more than 80"): console.log("less than 80");