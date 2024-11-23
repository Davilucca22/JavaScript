//Calcular a média de um array de números

const numeros = [10, 20, 30, 40, 50]

const media = numeros.reduce((cont,valor,_,array) => cont + valor / array.length,0)

console.log(media)
