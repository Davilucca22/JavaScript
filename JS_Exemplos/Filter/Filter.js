/*o filter recebe uma funçao de callback que pode receber tres parametros,VALOR que é o valor contido
em determinada posiçao,INDICE que é a localizaçao de determinado valor, e ARRAY que retorna o proprio array*/

const lista = [0,2,3,5,4,9,7,8,6,51,55,53,51,65,3,56,36,3]

const filtro = lista.filter((valor,indice,array) => {
    console.log(valor, indice ,array)
})

console.log(filtro)

/*retorna os numeros maiores q 10
const numeros = [1,5,12,3,50,18,20,4,47]
const maior = numeros.filter(valor => valor > 10)
console.log(maior)


const pessoas = [
    {nome:'joao',idade:51},
    {nome:'renato',idade:23},
    {nome:'maria',idade:19},
    {nome:'duda',idade:52},
    {nome:'carlos',idade:34}
]



//retorne o nome das pessoas com 5 letras ou mais
const nomeGrande = pessoas.filter( valor => valor.nome.length >= 5 )

//retorne as pessoas com mais de 50 anos
const velhos = pessoas.filter(valor => valor.idade > 50 )

//retorne as pessoas cujo nome termina com A(endsWith == termina com...)
const terminaA = pessoas.filter(valor =>valor.nome.endsWith('a'))

console.log('nomes com 5 letras ou mais:')
console.log(nomeGrande)
console.log()
console.log('pessoas com mais de 50 anos:')
console.log(velhos)
console.log()
console.log('pessoas cujo nome termina com A:')
console.log(terminaA)
*/