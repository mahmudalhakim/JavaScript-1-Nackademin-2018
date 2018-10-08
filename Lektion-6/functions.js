hej();  
// OK. Vi får anropa funktionen här!
// Alltså före deklarationen!

// Deklarera en funktion
function hej(){
    alert("Hej från filen functions.js");
}

// hej2(); // FEL!  Uncaught ReferenceError: hej2 is not defined
// Vi får inte anropa anonyma funktioner före funktionsuttrycket.

// Anonym funktion (saknar namn)
let hej2 = function(){           // OBS! Vi måste ha parenteser!
    alert ('Hej från en anonym funktion.');
}  
// Detta kallas att ska ett uttryck med hjälp av en funktion
// "Function Expression"