//Contar a ocorrência de elementos em um array

const itens = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã'];

let cont = 0

const contador = itens.reduce((acumulador,valor) => {
    acumulador[valor] = (acumulador[valor] || 0) + 1
    return acumulador
    
},{})

console.log(contador)