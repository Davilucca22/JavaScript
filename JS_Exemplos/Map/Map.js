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
const Nomes = pessoas.map(valor => valor.nome)
console.log('array apenas com os nomes das pessoas')
console.log(Nomes)

//remove a chave 'nome' do objeto
const RemoveNome = pessoas.map((valor,indice,array) => {
    delete valor.nome
    return valor
})
console.log('array sem os nomes')
console.log(RemoveNome)

//adicona uma chave id  em cada objeto
const addID = pessoas.map((valor,indice,array) =>{
    valor.id = indice
    return valor
})
console.log('array com IDs')
console.log(addID)
