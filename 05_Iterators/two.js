// for in
//For Map it will not work because Map is not iteratable
const myObject={
    rb: 'Ruby',
    js: 'JavaScript',
    cpp: 'C++'
}
for (const key in myObject) {
    console.log(`${key} is shorcut for ${myObject[key]}`);
}

const lang=['js','ruby','JavaScript']
for (const key in lang) {
    console.log(`${key}  value is  ${lang[key]}`);
}

//forEach
lang.forEach(function (item){
    console.log(item);
})

//with help of arraow fn
lang.forEach((item)=>{
    console.log(item);
})

//Using existing fn
function printMe(item){
    console.log(item);
}
lang.forEach(printMe)

//values provided by forEach

lang.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})


const myCoding=[
    {
        langName:"JavaScirpt",
        fileExtenstion:"js"
    },
    {
        langName:"Ruby",
        fileExtenstion:"rb"
    },
    {
        langName:"Java",
        fileExtenstion:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.fileExtenstion , item.langName);
})
//ForEach loop doesn't return any values.
const returnValue =myCoding.forEach((item)=>{
    return item
})
console.log(returnValue); // it will return undefined.