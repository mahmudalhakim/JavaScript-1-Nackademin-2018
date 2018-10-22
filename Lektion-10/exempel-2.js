/*
Steg 1: Läs in data
Skapa ett program som läser in (via två prompt)
antalet minuter man i genomsnitt ringer per månad
samt kostnaden per minut.

// Steg 2: Arbeta med beräkningar
Om man ringer för minst 1000kr per månad 
så har man rätt till 10% rabatt.

// Steg 3 - Visa resultatet
Som resultat skall programmet visa "en" dialogruta (alert) 
där det anges hur stor den beräknade kostnaden per månad blir 
samt hur mycket rabatt man får.

*/

// Steg 1: Läs in data

// Skapa nödvändiga variabler
let rabattsats = 0.10;
let antaletMinuter;
let kostnadenPerMinut;

antaletMinuter = prompt("Ange antalet minuter?");
console.log(antaletMinuter);
kostnadenPerMinut = prompt("Ange kostnaden per minut");
console.log(kostnadenPerMinut);

// Steg 2: Beräkningar
// Beräkna total kostnad
let totalKostnad = antaletMinuter * kostnadenPerMinut;
console.log(totalKostnad);

// Beräkna rabatten (10% om man ringer över 1000kr)
let rabatt = 0;
if(totalKostnad >= 1000 ){
    rabatt = totalKostnad * rabattsats;
    // Beräkna ny total kostnad
    // totalKostnad = totalKostnad * (1- rabattsats); 
    totalKostnad = totalKostnad - rabatt; 
}

// Steg 3: Visa resultatet
let resultat = 'Din kostnad per månad är: ' + totalKostnad + 'kr';
resultat += '\n';
resultat += 'Din rabatt är: ' + rabatt + 'kr';
resultat += '\n';
resultat += 'Total summa är: ' + (totalKostnad + rabatt) + 'kr';

alert(resultat);