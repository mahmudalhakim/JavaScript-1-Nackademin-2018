
/*
Tre olika sätt att hantera events i JavaScript
==============================================
1. HTML Event Attributes
Events hanteras inne i HTML-koden med hjälp av 
olika attribut som kopplas direkt till HTML-element.
(OBS! Rekommenderas inte. Följer ej SoC-principen) 
https://www.w3schools.com/tags/ref_eventattributes.asp
*/

function demo1(){
    let p = document.getElementsByTagName('p')[0];
    p.innerHTML = "Exempel på HTML Event Attribut.";
}
function demo2(){
    // Hämta ett specifikt element med hjälp av id
    let demo1 = document.getElementById('demo1');
    demo1.innerHTML = "Exempel på HTML Event Attribut."
}
/*
2. DOM Standard (traditionella) Events
Events hanteras inne i JavaScript-koden 
med hjälp av olika egenskaper som finns i DOM.
OBS! Vi får bara koppla en enda funktion till varje event.
https://www.w3schools.com/jsref/dom_obj_event.asp
*/

let btn1 = document.getElementById('btn1');
btn1.onclick = demo3;     // OBS! Inga ()
// btn1.onclick = demo4;  // Funkar inte!

function demo3(){
    let p = document.getElementById('demo3');
    p.innerHTML = "Exempel på DOM Standard Events.";
}

/*
3. DOM EventListener (rekommenderas varmt)
Events hanteras med hjälp av metoden addEventListener()
Du kan koppla flera olika funktioner till varje event.
Du kan också ta bort events med hjälp av 
metoden removeEventListener() 
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
*/
    
let btn2 = document.getElementById('btn2');
// console.dir(btn2);
btn2.addEventListener('click' , demo4);
btn2.addEventListener('click' , demo5);

function demo4(){
    let p = document.getElementById('demo4');
    p.innerHTML = "Exempel på DOM EventListener."
}

function demo5(){
    let p = document.getElementById('demo5');
    p.innerHTML = "Exempel på DOM EventListener."
}