//Dado um array de números, filtre os que possuem um vizinho consecutivo (anterior ou próximo).

const lista = [10, 11, 13, 14, 16, 17, 19]

const numerosConsecutivos = lista.filter((valor,indice,array) => array.includes(valor + 1) || array.includes(valor - 1))

console.log(numerosConsecutivos)
