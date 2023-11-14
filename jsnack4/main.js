/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50. */
"use strict"

// while

/* const numeri = [];

let  somma = 0

while(somma < 50 ){
    const numeroInserito = prompt("inserisci un numero");
    console.log({numeroInserito});
    numeri.push(numeroInserito);
    somma += +numeroInserito;
    console.log({somma});
}

console.log({numeri}); */

/* Do while 



const numeri = [];

let somma = 0

do {
    const numeroInserito = prompt("inserisci un numero");
    console.log({ numeroInserito });
    numeri.push(numeroInserito);
    somma += +numeroInserito;
    console.log({somma});
}while(somma < 50){
   break;
}

console.log({numeri}); */


// for

const numeri = [];



for ( let somma = 0; somma < 50; somma){
    const numeroInserito = prompt("inserisci un numero");
    console.log({ numeroInserito });
    numeri.push(numeroInserito);
    somma += +numeroInserito;
    console.log({somma});
}
console.log({numeri});