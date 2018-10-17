// Arbeta med datum och tid i JS

// Skapa en instans av objektet Date
let today = new Date();
console.log(today);
console.log(today.getFullYear()); // 2018
console.log(today.getMonth());    // 9 = Oktober
console.log(today.getDate());     // 17
console.log(today.getDay());      // 3 = Onsdag (0:Sun, 1:Mon, osv)
console.log("Klockan");
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
// console.log(today.getMilliseconds());

console.log(today.toDateString());
console.log(today.toTimeString());
