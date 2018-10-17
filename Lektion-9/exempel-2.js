// Arbeta med objektet Number

let PI = 3.14159;
console.log(typeof PI);
// Avrunda till två decimaler
console.log(PI.toFixed(2));     // 3.14
console.log(PI.toPrecision(2)); // 3.1

// Visa Max och Min värden på ett nummer i JS
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);


// NaN
let x;
console.log(x); // undefined
x = x + 2; // NaN
console.log(x);
// Statiska metoder
console.log(Number.isNaN());  // false
console.log(Number.isNaN(x)); // true


// Objektet Math

PI = Math.PI;
console.log(PI);

//let π = Math.PI;  // Alt+p för att få tecknet π (enbart Mac)
//console.log(π);


console.log(Math.E);

console.log(Math.abs(-8769));  // 8769
console.log(Math.pow(2, 2));   // 4
console.log(Math.pow(2, 4));   // 2*2*2*2 = 16
console.log(Math.pow(3, 2));   // 9
console.log(Math.sqrt(25));    // Roten ur 5

// Avrunda till närmaste heltal
let pris = 10.40;
console.log(Math.round(pris)); // 10
pris = 10.50;
console.log(Math.round(pris)); // 11
// Eller 
console.log(pris.toFixed());   // 11


// Ceil och Floor
let tal = 10.1;
console.log(Math.ceil(tal));   // 11
tal = 10.99;
console.log(Math.floor(tal));  // 10

// Max och Min
console.log(Math.max(1, 4, 743, 343, 2, 44));   // 743
console.log(Math.min(1, 4, 743, -343, 2, 0));   // -343

// Övning
/*
Skapa en funktion som har en parameter. 
Ange funktionsnamnet maxArray.
Funktionen ska ta en array av ett godtyckligt antal tal.
Funktionen ska returnera det största talet i arrayen.
*/

function maxArray(a){
    return Math.max(...a); 
    // Tips: ... är en operator i JS
    // som heter Spread Operator
}
console.log(maxArray([1,3,6,4]));  // 6
console.log(maxArray([7,3,6,4]));  // 7

// Slumptal
console.log(Math.random());  // mellan 0 och 1
// Mellan 1 och 10
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
console.log(Math.ceil( Math.random() * 10 ));
