// Encontrar o maior número em um array

const numeros = [2,68,45,24,74,15,12,35,87,96,26,54,10]

let maior = numeros[0]

const maiorNumero = numeros.reduce((cont,valor) => {
    if(valor > maior){ 
        maior = valor
    }
    return maior
},0)

console.log(maiorNumero)
