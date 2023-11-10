const elementPrimoInput = String(prompt("inserisci una parola"));
const elementSecondoInput = String(prompt("inserisci una parola"));

console.log({ elementPrimoInput });
console.log({ elementSecondoInput });

if (elementPrimoInput.length > elementSecondoInput.length) {
    console.log(elementSecondoInput);
    console.log(elementPrimoInput);
}
else if (elementPrimoInput.length < elementSecondoInput.length) {
    console.log(elementPrimoInput);
    console.log(elementSecondoInput);
}

else{
    console.log("Le due parole hanno la stessa lugnehzza")
}