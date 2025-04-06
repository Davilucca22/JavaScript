const nome = 'davi'
const sobrenome = 'lucas'

const nomecompleto = () =>  nome + ' ' + sobrenome 

//esse é o primeiro jeito de exportar dados para o module
//module.exports.name = nome
//module.exports.lastname = sobrenome

//esse é o segundo jeito de exportar dados para o module
exports.nome = nome
exports.sobrenome = sobrenome
exports.funcao = nomecompleto

//terceiro e menos usado jeito de exportar dados para o module
//this.name = nome
//this.lastname = sobrenome

console.log(module)
