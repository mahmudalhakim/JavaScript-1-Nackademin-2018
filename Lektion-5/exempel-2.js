// Aritmetiska operatorer i JS

let y = 5;
let x;

x = y + 2; // 7
x = y - 2; // 3
x = x + 2; // 5 
x = x - 2; // 3
x = y * 2; // 10
x = x * 2; // 20
x = y / 2; // 2.5 OBS! punkt, ej komma
// Modulus-operator
x = y % 2; // 1 är resten vid heltalsdividion
x = 10 % 3; // 1
x = 7 % 5; // 2
x = 5 % 7; // 5


// Ökningsoperator
x=10;
x++; // öka "alltid" med ett
x++; // x = x + 1
// Öka med två
x = x+2; 
// Eller
x += 2;  // Lägg till 2
x += 5;  // Lägg till 5

// Minskningsoperator
x = 10;
x-- ; // 9 - Minska med ett
// Minska med två
x = x - 2; // 7
// Eller
x -= 2; // 5

// 
x = "TEXT";
x = x / 2; // NaN
x = 2 / x; // NaN
x = x / x; // NaN

let x2;
console.log(x2/2); // NaN
console.log(2/x2); // NaN
console.log(x2/x2); // NaN

// Konkatenering 
let firstName = "Mahmud"
let lastName = 'Al Hakim';
let fullName = 'Hej ' + firstName + ' ' + lastName + '!';
console.log(fullName);

x = "1" + "2"; // 12
x = "1" + 2;   // 12
x = 1 + "2";   // 12
x = "1" + 2 + 3; // 12
x = 1 + 2 + "3"; // 33
x = "1" + (2+3); // 15

// Implicit typomvandling
x = "1" - "2"; // -1
// Vi får en automatisk typomvandling
x = 1 - "2"; // -1
x = "1" - 2; 
x = "1" * "2";
x = "1" / "2";

console.log(x);