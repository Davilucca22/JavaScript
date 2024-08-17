//retorna os numeros maiores q 10
//const numeros = [1,5,12,3,50,18,20,4,47]
//const maior = numeros.filter(valor => valor > 10)

const pessoas = [
    {nome:'joao',idade:51},
    {nome:'renato',idade:23},
    {nome:'maria',idade:19},
    {nome:'duda',idade:52},
    {nome:'carlos',idade:34}
]

//retorne os nomes com 5 letras ou mais
const nomegrande = pessoas.filter(valor => valor.nome.length >= 5)

//retorna as pessoas com mais de 50 anos
const maior50 = pessoas.filter(valor => valor.idade > 50 )

//retorna pessoas que terminam com A
const terminaA = pessoas.filter(valor => valor.nome.lastIndexOf('a') == valor.nome.length - 1)

console.log(nomegrande)
console.log('-----------------------------')
console.log(maior50)
console.log('-----------------------------')
console.log(terminaA)