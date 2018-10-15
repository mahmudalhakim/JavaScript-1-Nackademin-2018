// Skapa egna konstuktorer (Constructors)
// Skapa en blueprint (ritning) på en helt ny grej t.ex. personer, bilar osv.

// Exempel - Skapa en kontruktor som beskriver en person
// Person blir en ny typ (prototyp)
function Person(name, age){
    this.name = name;
    this.age  = age;
    this.children = [];
    this.email = [];
    this.cars = [];
}

// Skapa en konstruktor/typ som beskriver en bil
function Car(regnr , fabrikat){
    this.regnr = regnr;
    this.fabrikat = fabrikat;
}

// Skapa en instans av Car = skapa ett objekt
let c1 = new Car('ABC123' , 'Volvo');
// console.log(c1.regnr);
let c2 = new Car('XYZ098' , 'Mazda');
// Skapa flera objekt av Person() = skapa nya instanser
let mahmud = new Person('Mahmud' , 45);  // Vi kan inte använda {}
let kalle  = new Person('Kalle' , 10);
// mahmud och kalle blir två nya referenser till två olika objekt 

// mahmud har köpt c1 och c2 (två bilar)
mahmud.cars.push(c1, c2);

mahmud.cars[0].regnr; // ABC123
mahmud.cars[1].regnr; // XYZ098

// Ändra mahmuds egenskaper med punktnotation (dot notation)
mahmud.name = "Al Hakim";
mahmud.age++;

// Lägg till nya egenskaper
mahmud.weight = 90;


// Skapa en array av ett antal objekt
let persons = [mahmud,kalle];
console.log(persons);

// Visa info om det första objektet
console.log(persons[0].name);

// Ändra namnet
persons[0].name = 'Mahmud';
console.log(persons[0].name);

kalle.name = 'Mehdi';
mahmud.children.push(kalle);
console.log(mahmud);