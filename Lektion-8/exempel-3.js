// Arbeta med JavaScripts globala objekt

/* 
   OBS! Varning. Problem med var 
   Om du deklarerar variabler 
   som råkar ha samma namn som objektets egenskaper
   då skiver du över dessa egenskaper.
   Lösning: använd let istället.
*/
var innerWidth = 100;
var innerHeight = 200;

function demo(){
    console.log(this.innerWidth + 'px');
    console.log(this.innerHeight + 'px');
    // this pekar på ett objekt som heter Window (i webbläsaren)
}
demo();
