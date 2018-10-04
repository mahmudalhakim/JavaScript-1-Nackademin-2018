// Arbeta med arrayer i JavaScript

// Skapa en tom array
let cars1 = [];

// Skapa en array som innehåller data
let cars2 = ["Volvo" , "Saab", "BMW"];
// Detta är en array-literal

// Skapa en array med en konstruktor
let cars3 = new Array(1 , 2 , 3);
let cars4 = new Array();  // en tom array

// Att komma åt data
console.log(cars2[0]);
console.log(cars2[1]);
console.log(cars2[2]);
console.log(cars2);
console.log(cars2[3]);

// Hämta ett element och spara i en ny variabel
let car1 = cars2[0];
console.log(car1);

// Ändra ett element
cars2[0] = "Mazda";
console.log(cars2);
console.log(car1);

// En array i JS kan innehålla olika typer
let person = ["Mahmud" , "Al Hakim" , 45 , true];

// Du kan skapa 4 olika variabler istället för en array
let firstName = "Mahmud";
let lastName = "Al Hakim";
let age = 45;
let married = true;

// Hitta antal element med egenskapen length
let antal = person.length;
console.log(antal);

// Sortera en array
console.log(cars2);
cars2.sort();
console.log(cars2);
console.log("---------------");
// Att hitta sista elementet 
let customers = [
    "Kund 1",
    "Kund 2",
    "Kund 3",
    "Kund 4",
    "Kund 5",
    "Kund 6",
    "Kund 7",
    "Kund 8",
    "Kund 9",
    "Kund 10",
];
// Skriv ut antal element
console.log(customers.length);
// Skriv ut sista indexet
console.log(customers.length-1);
// Hämta antal element 
antal = customers.length;
// Leta efter sista indexet
let lastIndex = antal-1;
// Hämta sista kunden
let sista = customers[lastIndex];
// Skriv ut sista elementet
console.log(sista);

console.log("----------------------");

// Abeta med en "stack"
let stack = [];             // Skapa en tom array
stack.push("JavaScript 1"); // Lägg till sist i arrayen
console.log(stack);
stack.push("HTML och CSS");
console.log(stack);
stack.push("JavaScript 2");
console.log(stack);

let currentLength = stack.push("Bla bla bla");
console.log(stack);
console.log("Aktuell längd: ");
console.log(currentLength);

stack.push();
stack.push();
stack.push();
stack.push();
console.log(stack.length);

// Ta bort ett element
stack.pop(); // OBS! tar bort sista elementet
console.log(stack);

// Spara sista elementet innan borttagning
let kurs = stack.pop(); 
console.log(stack);
console.log(kurs);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
console.log("-----------------");

// Mer om array-konstruktorn
let test1 = new Array(1973,2008,2018); 
console.log(test1);
console.log(test1.length);
// Vad gör denna sats?
let test2 = new Array(1973);
test2.push(2008);
test2.push(2018);
console.log(test2);
console.log(test2.length);
let test3 = [10];
console.log(test3);
console.log(test3.length);
// Vad gör denna sats?
let test4 = new Array('10'); 
console.log(test4);
console.log(test4.length);
