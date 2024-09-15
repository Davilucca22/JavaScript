const pessoas = [
    { id:3, nome:'joao'},
    { id:2, nome:'maria'},
    { id:1, nome:'jonas'}   
]

/*poe o id na frente das chaves,mas reorganiza o array em ordem crescente(comportamento nao desejado)
const novasPessoas = {}
for(const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas[id] = {...pessoa}
}*/


//poe o id na frente das chaves e nao muda a ordem dos objetos
const novasPessoas = new Map()
for(const pessoa of pessoas){
    const { id } = pessoa
    //set() configura o objeto,coloca o id na frente das chaves e copia o objeto
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)

//get() seleciona um objeto pelo id informado(retorna undefined se nao tiver o id no array)
console.log(novasPessoas.get(1))
