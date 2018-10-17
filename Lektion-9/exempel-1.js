// Arbeta med inbyggda globala JS-Objekt

// Objektet String

let firstName = 'Mahmud';
console.log(typeof firstName); // typen är string

let antal = firstName.length;

console.log(antal); // 6

// Konvertera till gemener
firstName.toLowerCase(); 
console.log(firstName);
// OBS! Vi måste lagara resultatet
firstName = firstName.toLowerCase(); 
console.log(firstName);

firstName = firstName.toUpperCase();
console.log(firstName);

// Konkatenering 
let lastName = 'Al Hakim';
let fullName = firstName.concat(' ',lastName);
//let fullName = firstName + ' ' +lastName;
console.log(fullName);


// Substring()
console.log(fullName.substring(0,6));
//console.log(fullName.substring(7));
// Leta efter första mellanslaget
let space = fullName.indexOf(' ');
console.log(space);
console.log(fullName.substring(space+1));

// substr()
// Orignial string 'Mahmud Al Hakim'
console.log(fullName.substr(7,2)); // Al

// Strängar i JS indexeras som samma sätt som arrayer
console.log(fullName[0]);  // M

// Skriv ut sista tecknet i stängen
console.log(fullName[fullName.length-1]);

let arrTest = [1,2,3];
console.log(arrTest.length);
// Skriv ut sista elementet i arrayen
console.log(arrTest[arrTest.length-1]);

// Skriv ut index på första mellanslaget
console.log(fullName.indexOf(' '));

// Skriv ut index på första mellanslaget
console.log(fullName.lastIndexOf(' '));

let newName = "Kalle Anka ";
console.log(newName.indexOf(' ')); // 5
console.log(newName.lastIndexOf(' ')); // 10 varför?

console.log(fullName); // MAHMUD Al Hakim
                       // 012345678
console.log(fullName.charAt(1)); // A

// split()
let nameArray = fullName.split();
console.log(nameArray); // [ 'MAHMUD Al Hakim' ] ?????
nameArray = fullName.split(''); // Obs en tom sträng
console.log(nameArray); // [ 'M', 'A', 'H', 'M', 'U', 'D', ' ', 'A', 'l', ' ', 'H', 'a', 'k', 'i', 'm' ]
nameArray = fullName.split(' '); // OBS! mellanslag
console.log(nameArray);
fullName = "Mahmud;Al;Hakim";
nameArray = fullName.split(';'); // [ 'MAHMUD', 'Al', 'Hakim' ]
fullName = "Mahmud|Al|Hakim";
nameArray = fullName.split('|'); // [ 'MAHMUD', 'Al', 'Hakim' ]

fullName = "    Mahmud   Al   Hakim   ";
fullName = fullName.trim();
nameArray = fullName.split(' ');
// Chaining. En sats istället för två föregående satser
nameArray = fullName.trim().split(' ');
console.log(nameArray);

// Rensa alla mellanslag men behåll ett
fullName = "    Mahmud   Al   Hakim   ";
console.log(fullName);
nameArray = fullName.replace(/ +/g , ' ').trim();  // RegExp (överkurs)
console.log(nameArray);

fullName = "Mahmud;Al;Hakim";
// byt ut ; mot mellanslag
fullName = fullName.replace(';',' '); 
console.log(fullName); // Mahmud Al;Hakim  // OBS! enbart första ; byts ut

// byt ut alla ; mot mellanslag
fullName = fullName.replace(/;+/g,' ');  // RegEx (överkurs men bra att veta)
console.log(fullName);

// Escape-tecken
// \n new line
// \" för att visa " i en sträng 
// \' för att visa ' i en sträng 
// \t visar en tab
console.log("\nHej\nVälkommen till \"JS\".\n\nIdag har vi jobbat med string\n\n");
console.log('Hej och välkommen till \'JS\'');
console.log("Namn E-post");
console.log("Mahmud mahmud@alhakim.se");
console.log("Namn\tE-post");
console.log("Mahmud\tmahmud@alhakim.se");
console.log("Visa en backslash med dubbla \\");


// Övning
/*
Skapa en funktion som har en parameter. 
Ange funktionsnamnet capitalize
Funktionen ska ta en sträng 
och ändra den första bokstaven till versal.
*/
function capitalize_v1(str){
    // Den första bokstaven
    let firstChar = str.charAt(0);  // fel... indexOf(0);
    // Omvandla första teckenet till versal
    firstChar = firstChar.toUpperCase();
    // Hämta resten. Från tecken 2 (index 1) till slutet
    let resten = str.slice(1); // eller substring(1)
    // Skapa en ny sträng
    let result = firstChar + resten;
    return result;
}

function capitalize_v2(str){
    return str.charAt(0).toUpperCase() + str.substring(1);
}

let test = "hej och välkommen!";
console.log(capitalize_v1(test));
console.log(capitalize_v2(test));

