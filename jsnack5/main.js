/* Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo. */
"use strict"

const numeroN = prompt("inserisci il numero di Array da generare");

for (let i = 0; i < numeroN; i++) {
    const arrayNumeri = [];
    for (let j = 0; j < 10; j++) {
        let arrayNumeriCasuali = (Math.floor(Math.random() * 100) + 1)
        arrayNumeri.push(arrayNumeriCasuali);
    }
    console.log({ arrayNumeri });
    alert(arrayNumeri);
}