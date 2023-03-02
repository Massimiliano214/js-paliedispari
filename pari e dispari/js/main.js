const scelta = prompt("inserire: pari o dispari;");
const numeroScelto = parseInt(prompt("Inserisci nuero da 1 a 5;")); 

console.log("scelta pari/dispari " + scelta);
console.log("scelta numero player " + numeroScelto);

const numeroDaMoltiplicare = 5;
const numeroDaSommare = 1;

const variabileCorta = numeroCasuale (numeroDaMoltiplicare, numeroDaSommare);

console.log("numero pc " + variabileCorta);

const sommaNumeri = numeroScelto + variabileCorta;

let risultatoPari;

console.log("somma dei numeri " + sommaNumeri)


risultatoPari = tipoSomma(sommaNumeri);

if ((scelta == "pari") && (risultatoPari)) {
    console.log("Hai vinto");
} else if ((scelta == "dispari") && (risultatoPari == false)) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
};

function numeroCasuale (fattore, valoreSommato) {
    const numeroUscito = Math.floor(Math.random() * fattore) + valoreSommato;
    console.log("numero casuale " + numeroUscito);
    return numeroUscito;
};

function tipoSomma (sommaDaVerificare) {
    let risultatoPari;
    const sommaTotale = sommaDaVerificare;
    if (sommaTotale % 2 == 0) {
        risultatoPari = true;
    } else {
        risultatoPari = false;
    };

    console.log(risultatoPari);
    return risultatoPari;
};