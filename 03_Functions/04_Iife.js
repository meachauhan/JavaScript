// Immedialtely Invoked Function Expressions (IIFE) : to avoid polluting globle scope

//traditional method
function someFnction(){ console.log("this is fun");}
someFnction();

// IIFE 
(function someFnction(){ console.log("This is IIFEFunction");})();


// IIFE with Arrow function
(()=>(console.log("This is IIFE arrow function")))();

