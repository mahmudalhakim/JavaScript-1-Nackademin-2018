// Funktioner med return

function fullName_v1 (firsName, lastName){
    // Enklare att förstå
    let name;
    name = firsName + ' ' + lastName;
    // OBS! Funktionen returnerar en sträng
    return name;
}

function fullName_v2 (firsName, lastName){
    // Snabbare och proffsigare (Clean Code)
    return firsName + ' ' + lastName;
}

let name1 = fullName_v1('Mahmud' , 'Al Hakim');
console.log('Hej ' + name1);
// eller skriv ut direkt
console.log('Hej ' + fullName_v2('Kalle' , 'Anka'));
