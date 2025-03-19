function gerarNumerosMega(qtde) {
  const numeros = Array(qtde)
    .fill(0) // Preenche o array com 0
    .reduce((nums) => { // Reduz o array
      const novoNumero = gerarNumeroNaoContido(1, 60, nums); // Gera um número não contido no array
      return [...nums, novoNumero]; // Adiciona o novo número ao array
    }, [])
    .sort((n1, n2) => n1 - n2); // Ordena os números

  return numeros; // Retorna o array de números
}

function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min; // Gera um número aleatório
  return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio; // Recursividade
}

