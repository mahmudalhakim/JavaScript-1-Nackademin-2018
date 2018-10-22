// Truthy & Falsy
// Följande värden är alltid falska i JS
// 0
// null
// NaN
// false
// ''
// ""
// undefined

if(false || 0 || null || NaN || undefined || '' || "" ){
    console.log("Vi kommer aldrig hit");
}

let x = '';
if(x === ''){  // true
    console.log("x är en tom sträng");
}

if(1){
    console.log("Vi har en etta");
}
let mahmud;  // Blir undefined 
if(mahmud){  // false
    console.log("Välkommen Mahmud");
}
else{
    console.log("Du är inte välkommen, Mahmud!");
}

if([]){ 
    console.log("Vi har en array");
    // OBS! En tom array är true
}

if({}){
    console.log("Vi har ett objekt");
    // OBS! Ett tomt objekt är true
}

if("0"){
    console.log("Vi har en nolla");
    // OBS! En sträng som innehåller 0 är true
}

if("false"){
    console.log("Vi har strängen false");
    // OBS! Strängen false är true
}


if(!NaN){   // Not Not A Number  = true  
    // eller !false
    console.log("Test på !NaN");
}
