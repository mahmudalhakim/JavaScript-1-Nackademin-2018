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
// en förvald parameter (default parameter)


console.log('--------------------------------');

// Funktioner med två parametrar
// Skapa en funktion som beräknar summan av två tal
function sum(x = 0 , y = 0){
    console.log(x+y);
}
sum(7,9);
sum();
sum(123,456,789);

console.log('--------------------------------');


// Skapa en funktion med två parametrar, förnamn och efternamn.
// Funktionen visar meddelandet "Hej förnamn efternamn!" i console.
function hello2(firstName ='Förnamn', lastName='Efternamn'){
    console.log('Hej ' + firstName + ' ' + lastName + '!');
}
hello2('Mahmud', 'Al Hakim');
hello2('Kalle', 'Anka');
hello2();