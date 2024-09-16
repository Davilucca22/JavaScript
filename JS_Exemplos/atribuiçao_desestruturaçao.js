/*const num = [1,2,3,4,5,6,7]
const [n1,n2,n3,...resto] = num

console.log(n1,n2,n3)
console.log(resto)*/

const pessoa = {
    nome : 'davi',
    sobrenome : 'lucas',
    idade : 19 ,
    endereço: {
        rua : 'julia miranda',
        numero : 61
    }
}
 
const {nome: teste ,sobrenome} = pessoa
console.log(teste, sobrenome)


//pega um valor dentro do obj que ta dentro do obj
const {endereço: {rua,numero}} = pessoa
console.log(rua,numero)