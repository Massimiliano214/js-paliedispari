const word = prompt("Inserisci una parola:");

console.log(word);

const risultatoParolaInvertita = invertiParola(word);
console.log(risultatoParolaInvertita);

if (word == risultatoParolaInvertita) {
    alert("parola Palindroma");  
} else {
    alert("parola non palindroma");
};

function invertiParola(parolaDaInvertire) {
    let parolaInvertita = "";

    for (let i = parolaDaInvertire.length -1; i >= 0; i--) {

        parolaInvertita += parolaDaInvertire[i];
    };

    console.log(parolaInvertita);
    return parolaInvertita;
};