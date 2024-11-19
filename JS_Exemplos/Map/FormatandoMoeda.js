//Dado um array de números [10, 20, 30, 40], use map para formatá-los como valores monetários.
const numeros = [10, 20, 30, 40]

const real = numeros.map(valor => `R$ ${valor.toFixed(2).replace('.',',')}`)

console.log(real)