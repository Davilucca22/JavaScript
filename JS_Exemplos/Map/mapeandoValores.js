//Dado um array de objetos representando produtos,Crie um novo array contendo apenas os nomes dos produtos.

const produtos = [
    {nome:'tenis',preco:230.00},
    {nome:'bola de futebol',preco:50.00},
    {nome:'boné',preco:15.50},
    {nome:'bermuda',preco:30.20},
    {nome:'camisa',preco:45.25}
]

const nomes = produtos.map(valor => valor.nome)

console.log(nomes)
