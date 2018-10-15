// Några användbara metoder i objektet Window

// 1. prompt (inmatningsfält) och alert (popup-ruta)
let person = prompt('Vad heter du?');
alert('Hej ' + person);

// 2. setTimeout
// Kör en funktion efter ett antal sekunder
setTimeout(helloPopup, 3000);  // 3000 = 3 sekunder

// 3. setIntervall
// Repeterar en funktion flera gånger, 
// efter ett förutbestämt intervall (antal millisekunder)
setInterval(helloConsole , 1000);

function helloPopup() {
    alert('Hej ' + person);
}

function helloConsole() {
    console.log(person);
}
