const word = prompt("Inserisci una parola:");

let incremento = 0;
let decremento = word.length - 1;

let palindromo = false;

let risultatoTotale;

console.log("lunghezza parola " + decremento);

let risultatoPal = palindromoRicerca(word[incremento], word[decremento])


risultatoTotale = palindromoRicerca(word[incremento], word[decremento]);

console.log("ris totale " + risultatoTotale);

if (risultatoTotale) {
    
} else {
    
};

let verita = false;

while (incremento < word.length) {
    if (risultatoPal) {
        verita = true;
        
    }
    incremento++;
    decremento--;
};

if (verita) {
    alert("la parola inserita è palindroma");
}
else {
    alert("la parola inserita non è palindroma");
};



function palindromoRicerca (primaLettera, secondaLettera) {
    let risultatoPalindromo = false;

    console.log(risultatoPalindromo);
        if (primaLettera == secondaLettera) {
            risultatoPalindromo = true;
            console.log(risultatoPalindromo);
            return risultatoPalindromo;
            
        } else if (primaLettera != secondaLettera) {
            risultatoPalindromo = false;
            console.log(risultatoPalindromo);
            return risultatoPalindromo;
            
        };
    
        
        
    
};


