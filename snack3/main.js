"use strict"

//variabile
let elementSomma = 0

//ciclo
for( let i = 1; i <= 10; i++){
    let elementNumero = Number(prompt(`${i}-inserisci un numero`));
    console.log(`${i} il numero inserito è ${elementNumero}`);

    elementSomma+=elementNumero;
    console.log(`${i} La somma attuale è  ${elementSomma}`);
} 

    console.log(`La somma totale  è  ${elementSomma}`)