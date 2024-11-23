//Concatenar strings em um array
const string = ['ola','mundo','com','reduce']

const concatenar = string.reduce((cont,valor) => {
    return  cont + ' ' + valor
})

console.log(concatenar)