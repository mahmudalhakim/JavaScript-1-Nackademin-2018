// Deklarera en funktion med en parameter
function hello(message = "Welcome to my site!"){

    console.log(message);

}

// Anropa funktionen
hello("Här kommer meddelande nr 1!");
hello("Här kommer meddelande nr 2!");
hello("Här kommer meddelande nr 3!");
// Data som skickas vid anropet kallas argument!

hello(12345);
hello(true);
hello();   
// undefined löser vi med hjälp av 
// en förvald parameter (default parameter) . Se rad 2


console.log('--------------------------------');


// Funktioner med två parametrar

// Skapa en funktion som beräknar summan av två tal
function sum(x = 0 , y = 0){
    console.log(x+y);
}
sum(7,9);
sum();
sum(123,456,789);
sum('text');  // text0 (OBS! Konkatenering)


console.log('--------------------------------');

// Skapa en funktion som multiplicerar två tal
function multiply(a=0,b=0){
    console.log("******  Multiply ****** ");
    console.log(a*b);
    console.log("*********************** ");

}
multiply(10,5);        // 50
multiply(100);         // 0  (100*0)
multiply('TEXT', 50);  // NaN
multiply();            // 0 p.g.a. förvalda parametrar


// Skapa en funktion med två parametrar, förnamn och efternamn.
// Funktionen visar meddelandet "Hej förnamn efternamn!" i console.
function hello2(firstName ='Förnamn', lastName='Efternamn'){
    console.log('Hej ' + firstName + ' ' + lastName + '!');
}
hello2('Mahmud', 'Al Hakim');
hello2('Kalle', 'Anka');
hello2();


// En egen log-funktion
function log(text){
    console.log('************************');
    console.log('* ' + text);
    console.log('************************');
    console.log();
}
log('Hej Mahmud');

// En funktion som anropar en annan funktion
// Funktionen hello3 nedan anropar funktionen log ovan (se rad 62)
function hello3(name){
    log('Hello ' + name);
}
hello3('Mahmud');
hello3('Kalle');
hello3('Erik');

// Funktioner med tre parametrar
function age(firstName, lastName, age = 'alldeles'){

    log(firstName + ' är ' + age + ' år gammal!');
    
    // Eller bättre utskrifter med "Template Strings"
    log(` ${firstName} är ${age} år gammal! `); // OBS! Backticks 

}
age('Mahmud', 'Al Hakim' , 45);
age('Kalle' , 'Anka' , 10);
age('Mahmud');

// En funktion med ett godtyckligt antal parametrar
function manyThings(...things){   // ... skapar en array
    console.log(things);
}
manyThings(1);
manyThings(1,2);
manyThings(1,2,3);
manyThings("Mahmud", "Kalle" , "Erik");
manyThings("Mahmud", "Al Hakim", 45);
manyThings();