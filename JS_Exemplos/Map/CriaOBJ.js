//Criar objetos a partir de valores
const nomes = ['ana','joao','marcos']

const CriaObj = nomes.map((valor,indice) => ({nome:valor,indice:indice}))
console.log(CriaObj)
