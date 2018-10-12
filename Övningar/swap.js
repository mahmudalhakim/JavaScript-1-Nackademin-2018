// Några Swap-algoritmer i JavaScript
// Mahmud Al Hakim 
// Stockholm 2018-10-12

console.log("Lösning 1 - Arbeta med globala variabler");

let firstName = 'Al Hakim';
let lastName = 'Mahmud';

function swap_v1() {
    let temp = firstName;
    firstName = lastName;
    lastName = temp;
}

console.log("Före swap...");
console.log(firstName, lastName);
swap_v1();
console.log("Efter swap...");
console.log(firstName, lastName);

// Reflektioner
// Funktionen byter värde enbart på våra globala variabler
// Kan inte användas till några andra variabler i programmet

console.log("******************************************");

console.log("Lösning 2 - Arbeta med lokala variabler");

function swap_v2(var1, var2) {
    // var1 och var2 är lokala variabel 
    // existerar enbart inne i funktionen
    let temp = var1;
    var1 = var2;
    var2 = temp;
}
let a = 'A';
let b = 'B';
console.log("Före swap...");
console.log(a, b);
swap_v2(a, b); 
console.log("Efter swap...");
console.log(a, b , "     OBS! Funkar inte!!!");  
// Detta kallas "Call By Value" 
// Värdet skickas, alltså kopior av variabler skickas

console.log("******************************************");

console.log("Lösning 3 - Returnera en array (referenstyp)");

function swap_v3(var1, var2) {
    let temp = var1;
    var1 = var2;
    var2 = temp;
    return [var1, var2];
}
let x = 'TEST 1';
let y = 'TEST 2';
console.log("Före swap...");
console.log(x, y);
[x, y] = swap_v3(x, y); 
// OBS! Vi får tillbaks en array efter anropet
console.log("Efter swap...");
console.log(x, y);   

console.log("******************************************");

console.log("Lösning 4 - Arbeta med en array");

function swap_v4(a) {
    //console.log(a);
    let temp = a[0];
    a[0] = a[1];
    a[1] = temp;
    //console.log(a);
    return a;
}

let x1 = "X1";
let x2 = "X2";
console.log("Före swap...");
console.log(x1, x2);
[x1, x2] = swap_v4([x1, x2]);
console.log(x1, x2);
console.log("Efter swap...");

console.log("******************************************");

console.log("Lösning 5 - En modern lösning med (Destructuring assignment)");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function swap_v5(a, b) {
    return [a, b] = [b, a];
}
let a1 = 'X';
let a2 = 'O';
console.log("Före swap... ", a1, a2);
console.log(a1, a2);
[a1,a2]=swap_v5(a1,a2);
console.log("Efter swap...", a1, a2);
console.log(a1, a2);

console.log("******************************************");

console.log("En snabb lösning på en rad utan en funktion!");
let foo = 'X';
let bar = 'O'
console.log(foo,bar);
[foo , bar] = [bar , foo]; // Destructuring assignment
console.log(foo,bar);