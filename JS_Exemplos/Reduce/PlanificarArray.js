//Transforme um array de arrays em um único array plano.

const arrays = [[0,1],[2,3],[4,5],[6,7],[8,9]]

const ArrayPlano = arrays.reduce((cont,valor) => cont.concat(valor),[])

console.log(ArrayPlano)
