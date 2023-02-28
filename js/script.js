/*Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
__________________________________________________________________________________
-preparare un array di path immagini
-preparare gli elementi in JS corrispondenti agli elementi HTML
-memorizzare una variabile di indice
-> alla pressione del pulsante "down"
  .aumentare il valore dell'indice di una unità
  .mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
-> alla pressione del pulsante "up"
  .diminuire il valore dell'indice di una unità
  .mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
*/

//preparare un array di path immagini
const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",    
];

//preparare gli elementi in JS corrispondenti agli elementi HTML
const upArrowElement = document.getElementById("up-arrow");
const downArrowElement = document.getElementById("down-arrow");
const activeImgElement = document.getElementById("active-img");

//memorizzare una variabile di indice
let index = 0;

activeImgElement.src = images[index];

downArrowElement.addEventListener("click", function(){
    
    //aumentare il valore dell'indice di una unità
    index++;
    
    //mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
    activeImgElement.src = images[index];
});

upArrowElement.addEventListener("click", function(){
    
    //aumentare il valore dell'indice di una unità
    index--;
    
    //mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
    activeImgElement.src = images[index];
});


