// Skapa ett objekt som beskrier en bil 
// enligt övningen under lektion 7 (se ppt)

let car = {

    // Egenskaper  (properties)
    name  : 'Fiat',
    model : '500',
    weight: '850kg',
    color : 'white',

    // Metoder (methods)
    start: function(){
        console.log("Start...");
    },
    drive:function(){
        console.log("Drive...");
    },
    brake:function(){
        console.log("Brake...");
    },
    stop:function(){
        console.log("Stop...");
    }

}

console.log(car.name);
car.start();

// Referenstyper
console.log(typeof car);  // Object
let cars = [];
console.log(typeof cars); // Object