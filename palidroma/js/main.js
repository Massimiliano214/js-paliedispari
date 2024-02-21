// const word = prompt("Inserisci una parola:");

// console.log(word);

// const risultatoParolaInvertita = invertiParola(word);
// console.log(risultatoParolaInvertita);

// if (word == risultatoParolaInvertita) {
//     alert("parola Palindroma");  
// } else {
//     alert("parola non palindroma");
// };

// function invertiParola(parolaDaInvertire) {
//     let parolaInvertita = "";

//     for (let i = parolaDaInvertire.length -1; i >= 0; i--) {

//         parolaInvertita += parolaDaInvertire[i];
//     };

//     console.log(parolaInvertita);
//     return parolaInvertita;
// };

let parola = prompt("inserisci parola");

let parolaInvertita = invertiParola(parola);
if (parolaInvertita == parola) {
    alert("la parola è palindroma");
} else {
    console.log("la parola non è palindroma")
}

function invertiParola(word) {
    let Inversione = "";
    for (let i = word.length - 1; i >= 0; i--) {
        Inversione += word[i];
    }
    return Inversione;
}
