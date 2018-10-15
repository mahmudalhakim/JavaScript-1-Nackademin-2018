/*
       Arbeta med kontruktorer
*/

// Skapa ett nytt objekt med hjälp av en konstruktor
let mahmud = new Object();

/************** Egenskaper ****************/ 
mahmud.name = "Mahmud Al Hakim";
mahmud.age  = 45;

/*************** Metoder ******************/ 
// En metod som skriver ut info i console
mahmud.print = function(){
    console.log(this.name + ' är ' + this.age + ' år gammal.');
}

// En metod som returnerar en sträng
mahmud.info = function(){
    return this.name + ' är ' + this.age + ' år gammal';
    // return `${this.name} är ${this.age} år gammal.`;
}

// Använd objektets egenskaper
console.log(mahmud.name);

// Använd objektets metoder
mahmud.print();
let i = mahmud.info();
console.log(i);
console.log(mahmud.info());


// Repetition
// Skapa en objektliteral 
let kalle = {
    name : 'Kalle Anka',
    age  : 10,
    print:function(){
        console.log(this.name + ' är ' + this.age + ' år gammal.');
    },
    info:function(){
        return this.name + ' är ' + this.age + ' år gammal';
    }
}
// Lägg till flera egenskaper och metoder
kalle.mobile = '07093453434';
kalle.run   = function(){
    console.log(this.name + ' is running...');
}
console.log(kalle.info());
console.log(kalle.mobile);
kalle.run();
console.log(kalle);


// Två olika sätt att skapa en array i JS
// 1. Arrayliteral (Array Literal)
let persons = ['Mahmud','Kalle']; 
// 2. Arraykonstruktor (Array Constructor)
let cars = new Array();  

cars[0] = 'Volvo';
cars[1] = 'Mazda';
// Samma som ovan... men som en literal istället
cars = ['Volvo', 'Mazda'];

// Sammanfattning - Olika sätt att skapa objekt i JS
// 1. Literal Notation
let vadSomHelst = {};

// 2. Constructor Notation
let ettAnnatObjekt = new Object();

// En primitiv sträng
let str1 = '';  
console.log(typeof str1); // String
// Ett objekt av typen string
let str2 = new String();  // Object
console.log(typeof str2);
