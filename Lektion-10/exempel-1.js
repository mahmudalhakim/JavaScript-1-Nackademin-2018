let score = 40;

// If-satsen
if(score >= 50){
    congratulate();
}
// if-else-satsen
else{
    encourage();
}

function congratulate(){
    console.log("Congratulations.");
}
function encourage(){
    console.log("Have another go!");
}

// if...else-if-satsen
let hour = new Date().getHours();
// console.log(hour);
// hour = 01;
let greeting = '';
if(hour < 12){
    greeting = "God morgon!";
}
else if(hour < 17){
    greeting = "God dag!";
}
else{
    greeting = "God kväll";
}
console.log(greeting);



// == eller ===
let x = '5'; // eller "5"
console.log(typeof x); // string

let y = 5;
console.log(typeof y); // number

if(x == 5){             // Farligt
    console.log(x + 5); // 55  
}
if(y == 5){             // Ok. men....
    console.log(y + 10); // 15
}

x = '5';
if(x === 5){   // False
    console.log(x + 2);
}
if(x !== 5){   // True  
    console.log(x + 2); // 52
}

x = '5';
if(x != 5){  //false
    console.log(x + 4); 
}