function bubbleSort(vetor) {
    let n = vetor.length;
    let trocado;

    
    do {
        trocado = false;

        for (let i = 0; i < n - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let auxiliar = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = auxiliar;
                trocado = true; 
            }
        }

        n--; 
    } while (trocado);

    return vetor;
}