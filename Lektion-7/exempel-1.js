// Vad är Scope (räckvidd)?

console.log("------- Lokala variabler -------");

{
    let x = 10;
    console.log('x = ' + x);
}
// console.log('x = ' + x); // ReferenceError: x is not defined

{
    var y = 10;
    console.log('y = ' + y);
}

console.log('y = ' + y); // OK => 10

console.log('--------------------------------');

// Variabler inne i funktioner är alltid lokala
//                                ------
function demo(){
    var local_1 = 1;
    let local_2 = 2;
    console.log(local_1);
    console.log(local_2);
}
demo();
// Att skriva ut lokala variabler utanför funkionen => ERROR
// console.log(local_1); // ReferenceError: local_1 is not defined
// console.log(local_2); // ReferenceError: local_2 is not defined

console.log("------- Globala variabler -------");

// Globala variabler (The Global Scope)

var global_1 = 10;
let global_2 = 20;
console.log(global_1);
console.log(global_2);

console.log("------- Globala och lokal variabler -------");

var global_3 = 'En global variabel';

function demo2(){
    let local_3 = 'En lokal variabel';
    // OBS! Om du glömmt let/var så skapar JS en global variabel
    console.log(local_3);
}
demo2();
console.log(global_3);
console.log(local_3); // ReferenceError: local_3 is not defined
