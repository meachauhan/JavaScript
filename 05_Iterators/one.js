//Loops for Arrays:

//for of
//We can't iterate on Objects
const arr=[1,2,23,4,45,5]
for (const val of arr) {
    console.log(val);
}


//Maps
//Keep the insertion order
//Duplicates values are not allowed
const map= new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR', "France")
console.log(map);

for (const [key,value] of map) {
    console.log(`Key: ${key}, values: ${value}`);
}