//Dado um array de pessoas com hobbies, filtre aquelas que têm pelo menos um hobby em comum com outra pessoa.

const pessoas = [
    {nome:'joao',idade:25,hobbie:'futebol'},
    {nome:'maria',idade:35,hobbie:'volei'},
    {nome:'mateus',idade:21,hobbie:'musica'},
    {nome:'leticia',idade:18,hobbie:'volei'},
    {nome:'lucas',idade:19,hobbie:'futebol'}
]

const filtro = pessoas.filter((valor,indice,array) => valor.hobbie == 'futebol' || valor.hobbie == 'volei')

console.log(filtro)
