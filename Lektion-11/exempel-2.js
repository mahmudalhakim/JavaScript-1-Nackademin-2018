// Iteration över arrayer

let operativsystem = ['Windows', 'Macintosh', 'Linux', 'Unix', 'iOS'];

for (let i = 0; i < operativsystem.length; i++) {
    console.log(operativsystem[i]);
}

let data = [
    { name: 'Mahmud', email: 'mahmud@email.com' },
    { name: 'Yasmin', email: 'yasmin@email.com' },
    { name: 'Mehdi', email: 'Mehdi@email.com' },
    { name: 'Dania', email: 'Dania@email.com' },
    { name: 'Mariam', email: 'Mariam@email.com' },
];

// Skriv ut allt
// console.log(data);

// Skriv ut e-postadresser
for (let i = 0; i < data.length; i++) {
    // console.log(data[i]); // skriver ut alla objekt
    console.log(data[i].email);

}

console.log("-------  For-in ---------");

// For-in-satsen
for (let i in data) {
    console.log(i + ':' + data[i].name);
}

console.log("-------  For-of ---------");
// For-of-satsen
for (let obj of data) {
    console.log(obj.email);
}

data = [
    {
        name: 'Mahmud',
        email: 'mahmud@email.com',
        address: {
            street: 'Tomtebodavägen 3a',
            county: 'Solna',
            zipcode: '111 12'
        }
    },
    {
        name: 'Yasmin', email: 'yasmin@email.com',
        address: {
            street: 'Tomtebodavägen 3a',
            county: 'Solna',
            zipcode: '111 12'
        }
    },
    {
        name: 'Mehdi', email: 'Mehdi@email.com',
        address: {
            street: 'Tomtebodavägen 10',
            county: 'Solna',
            zipcode: '111 12'
        }
    },
    {
        name: 'Dania', email: 'Dania@email.com',
        address: {
            street: 'Tomtebodavägen 10',
            county: 'Solna',
            zipcode: '111 12'
        }
    },
    {
        name: 'Mariam', email: 'Mariam@email.com',
        address: {
            street: 'Tomtebodavägen 10',
            county: 'Solna',
            zipcode: '111 12'
        }
    },
];

for(let obj of data){
    console.log(obj.name + ' bor på ' + obj.address.street);
}