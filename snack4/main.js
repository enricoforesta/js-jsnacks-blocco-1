/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50. */
"use strict"

const numeri = [];

let  somma = 0

while(somma < 50 ){
    const numeroInserito = Number(prompt("inserisci un numero"));
    console.log({numeroInserito});
    numeri.push(numeroInserito);
    somma = somma + numeroInserito;
    console.log({somma});
}

console.log({numeri});
