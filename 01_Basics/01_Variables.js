const accountId=4333 //Can't be change after intializing
let accountEmail="akash@gmil.com"
var accountPassword="12341"
accountcty="Jaunpur"
let accountState

// accountId=2  // not allowed
accountEmail="ak@at.com"
accountPassword="3423"
accountcty="Varanasi"

/*
    Generally we won't use var keyword because of issue in block and functional scope .
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountcty,accountState]);