// Arbeta med objekt i JS

// Objektliteral (Object Literal)
// Skapa objekt med hjälp av måsvingar { }

let car   = {}; // Ett tomt objekt
let kalle = {};

let mahmud = {
    // Egenskaper
    name     : 'Mahmud Al Hakim',  
    age      : 45,
    weight   : 89.50,
    isMarried: true,
    children : [],
    // Metoder
    printInfo:function(){
        console.log(this.name + ' är ' + this.age + ' år gammal!');
    },
    returnInfo:function(){
        return (this.name + ' är ' + this.age + ' år gammal!');
    }
};

console.log(mahmud);     // Skriv ut hela objektet
console.log(mahmud.name);
console.log(mahmud.age);
console.log(mahmud.weight);

// Metoden returnInfo returnerar en sträng
console.log(mahmud.returnInfo());
 // Metoden printInfo skriver ut en sträng
mahmud.printInfo();

// Ändra egenskaper
mahmud.name = "Kalle Anka";

mahmud.age++;   // Öka med ett
mahmud.age += 1; 
mahmud.age = mahmud.age + 1;

mahmud.age--; // Minska med ett
mahmud.age -= 1;
mahmud.age = mahmud.age - 1;

// Ta bort egenskaper
delete mahmud.weight;
console.log(mahmud.weight); // undefined
console.log(mahmud);  // weight saknas!!!

// Lägg till egenskaper
mahmud.height = 170; 
console.log(mahmud);


let x1 = 2;
let x2 = x1;

// Kopiera ett objekt (svårt)
let alhakim = mahmud; 
alhakim.name = "Kajsa Anka";
console.log(mahmud.name);    // "Kajsa Anka"
console.log(alhakim.name);   // "Kajsa Anka"
// mahmud och alhakim pekar på samma objekt!!!
// Objekt är en referenstyp (som lagras i heap)
// Hur kopierar man objekt då???
let mahmud2 = {};
mahmud2.name = mahmud.name;
mahmud2.age  = mahmud.age;
// O.S.V.
console.log(mahmud2);

// Arrayer är också objekt
let arr1 = [1,2,3];
let arr2 = arr1;  // Är detta en kopia?
arr1[0] = 100;
arr2[1] = 200;
console.log(arr2);
console.log(arr1);


// Ta bort objektet
mahmud = null; 
//console.log(mahmud);
