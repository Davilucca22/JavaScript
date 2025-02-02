const pessoa = {
    nome: 'davi',
    sobrenome: 'lucas',
    idade: 19,
    endereço:{
        rua:'julia miranda ruivo',
        numero: 61,
        bairro:'tenentes',
        cidade:'extrema'
    }
}

const {nome} = pessoa
const {endereço:{rua,bairro,numero,cidade}} = pessoa

console.log(`Ola ${nome} seu endereço é  rua ${rua},bairro ${bairro} numero ${numero} na cidade de ${cidade}`)
