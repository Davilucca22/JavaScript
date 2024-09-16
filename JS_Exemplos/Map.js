//retorna um array com o dobro dos valores do array original
const numeros = [1,5,12,3,50,18,20,4,47]
const dobro = numeros.map(valor => valor  *2 )
console.log(dobro)


const pessoas = [
    {nome:'joao',idade:51},
    {nome:'renato',idade:23},
    {nome:'maria',idade:19},
    {nome:'duda',idade:52},
    {nome:'carlos',idade:34}
]

//retorna um array apenas com os nomes de pessoas
const nomePessoa = pessoas.map(valor => valor.nome)
console.log('Array apenas com os nomes dos objetos:')
console.log(nomePessoa)

//remove a chave 'nome' do objeto
const remove = pessoas.map((valor,indice,array) => {
    delete valor.nome
    return array
})
console.log('Nomes removidos dos objetos')
console.log(pessoas)

//adicona uma chave id  em cada objeto
const addId = pessoas.map((valor,indice,array) => {
    valor.id = indice
    return array
})
console.log('ID adicionado em cada objeto')
console.log(pessoas)
