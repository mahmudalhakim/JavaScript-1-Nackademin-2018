/*
På en arbetsplats erbjuds man följande lön.
Första dagen tjänar man en krona 
och sedan fördubblas lönen varje dag.
Skriv ett program som räknar ut hur länge 
man behöver arbeta för att tjäna ihop minst 10 miljoner kronor.
*/

// Steg 1 - Skapa nödvändiga variabler
let dag = 1;
let lon = 1; // 1kr

// Steg 2 - Arbeta med villkoret (minst 10 miljoner)
while(lon <= 10000000){
    dag++;     // Man måste jobba, lägg till en dag
    lon *= 2   // Lön fördubblas (lon = lon * 2 eller lon*=2);
}
// Sluta jobba - lön är mer än 10 miljoner
console.log("Du måste jobba " + dag + " dagar för att tjäna minst 10 miljoner!");

// Samma problem med for-sats istället
console.log("-------- for-sats --------------");

dag = 1;
lon = 1;
for(dag = 1 ; lon <= 10000000 ; dag++)
    lon *= 2;
console.log("Du måste jobba " + dag + " dagar för att tjäna minst 10 miljoner!");

// Alternativ 2 - Iterera över lön istället för dag
dag = 1;
lon = 1;
for(lon = 1 ; lon <= 10000000 ; lon*=2)
    dag++;
console.log("Du måste jobba " + dag + " dagar för att tjäna minst 10 miljoner!");
