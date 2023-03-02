const word = prompt("Inserisci una parola:");

let incremento = 0;
let decremento = word.length - 1;

let palindromo = false;

console.log("lunghezza parola " + decremento);
while (incremento < word.length)  {

    
    if (word[incremento] == word[decremento]) {
        palindromo = true;
        console.log(word[incremento])
        console.log(word[decremento])
        
    } else if (word[incremento] == word[decremento]) {
        palindromo = false;
    };

    incremento++;
    decremento--;
};


if (palindromo) {
    alert("la parola inserita è palindroma");
} else {
    alert("la parola inserita non è palindroma");
};

