//retorne a soma do dobro dos pares
const numeros = [2, 6, 53, 11, 48, 4, 12, 37]
//filter:filtrou o array,buscando os pares| map:dobrou o valor dos pares| reduce:somou o valor do dobro dos pares
const pares = numeros.filter(valor => valor % 2 == 0).map(valor => valor * 2).reduce((contador,valor) => contador += valor)
console.log(pares)