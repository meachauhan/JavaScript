// Random Hex value
const hexDigits="0123456789ABCDEF"
function generateHexValue(){
let hexValue="#"
for(let i=0;i<6;i++){
    let randomIndex=Math.floor(Math.random()*16)
    hexValue+=hexDigits[randomIndex];

}
return hexValue
}
const p=document.querySelector('#hexvalue')

const body=document.querySelector('body')
const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
let myinterval
start.addEventListener('click',startChangingColor)
function startChangingColor(){
    myinterval=setInterval(backgroundColorChange,2000)
    function backgroundColorChange(){
        let value=generateHexValue();
        p.innerText=value
        body.style.backgroundColor=value
    }
    
}


stop.addEventListener('click',function(){
    clearInterval(myinterval);
    
})

