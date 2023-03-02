const word = prompt("Inserisci una parola:");

let incremento = 0;
let decremento = word.length - 1;

let palindromo = false;

console.log(decremento);
while (incremento < word.length)  {

    
    if (word[incremento] == word[decremento]) {
        let palindromo = true;
    }

    incremento++;
    decremento--;
};


if (palindromo) {
    alert("la parola inserita è palindroma");
} else {
    alert("la parola inserita non è palindroma");
};

