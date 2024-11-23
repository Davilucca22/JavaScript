const numeros = [1, 2, 9, 4, 9, 2, 3, 4, 12, 10, 58]

//soma todos os valores do array
const soma = numeros.reduce((acumulador,valor) =>{
    acumulador += valor
    return acumulador
},0)// <- valor inicial do acumulador,pode ser tambem um array vazio

console.log(`a soma de todos os valores do array é ${soma}`)

//retorna um novo array somente com os numeros pares
const pares = numeros.reduce((acumulador,valor) => {
    if(valor % 2 == 0){
        acumulador.push(valor)
    }
    return acumulador
},[])

console.log(pares)

//retorna um array com o dobro dos valores
const dobro = numeros.reduce((acumulador,valor) =>{
    acumulador.push(valor * 2)
    return acumulador
},[])

console.log(dobro)


const pessoas = [
    {nome:'marcelo',idade:51},
    {nome:'maria',idade:26},
    {nome:'joao',idade:100},
    {nome:'julia',idade:14},
    {nome:'leticia',idade:82}
]

maior = pessoas[0].idade
const maisVelha = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) return acumulador   
    return valor
})

console.log(maisVelha)
