let numeri = [2, 4, 3, 1, 5];
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        // Trova l'indice del minimo elemento nel resto dell'array
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Scambia l'elemento corrente con il minimo trovato
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
}

// Chiamiamo la funzione per ordinare i numeri
selectionSort(numeri);

console.log(numeri);