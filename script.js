function bubbleSort(vetor) {
  let n = vetor.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      
      if (vetor[j] > vetor[j + 1]) {
        let auxiliar = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = auxiliar;
      }
    }
  }
  return vetor;
}

console.log(bubbleSort([5, 2, 9, 1, 5]));