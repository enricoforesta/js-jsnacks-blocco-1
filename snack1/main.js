const elementPrimoInput = [prompt("inserisci una parola")];
const elementSecondoInput = [prompt("inserisci una parola")];

console.log({ elementPrimoInput });
console.log({ elementSecondoInput });

if (elementPrimoInput.length > elementSecondoInput.length) {
    console.log(elementPrimoInput);
    console.log(elementSecondoInput);
}
else if (elementPrimoInput.length < elementSecondoInput.length) {
    console.log(elementSecondoInput);
    console.log(elementPrimoInput);
}
else{
    console.log("Le parole hanno la stessa lugnhezza")
}

