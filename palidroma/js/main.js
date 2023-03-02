const word = prompt("Inserisci una parola:");

let incremento = 0;
let decremento = word.length - 1;

let palindromo = false;

let risultatoTotale;

console.log("lunghezza parola " + decremento);

palindromoRicerca(word[incremento], word[decremento])


risultatoTotale = palindromoRicerca(word[incremento], word[decremento]);

if (risultatoTotale) {
    alert("la parola inserita è palindroma");
} else {
    alert("la parola inserita non è palindroma");
};

function palindromoRicerca (primaLettera, secondaLettera) {
    let risultatoPalindromo;

    console.log(risultatoPalindromo);

    while (incremento < word.length) {
        if (primaLettera == secondaLettera) {
            risultatoPalindromo = true;
            console.log(risultatoPalindromo);
            
        } else if (primaLettera != secondaLettera) {
            risultatoPalindromo = false;
            console.log(risultatoPalindromo);
            incremento = 100;
            
        };
    
        incremento++;
        decremento--;
        return risultatoPalindromo;
    }
    
};
