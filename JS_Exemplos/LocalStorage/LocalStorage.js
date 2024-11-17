//setItem armazenar um valor
localStorage.setItem("nome","davi")

//getItem recupera o valor armazenado
console.log(localStorage.getItem("nome"))

//removeItem remove determinado item do armazenamento
localStorage.removeItem("nome")

//clear limpa todo o localstorage
//localStorage.clear()

const pessoa = {
    nome:'davi',
    idade:19,
    altura:1.80
}

//para salvar um objeto é necessario usar o JSON para converte-lo corretamente para uma string
localStorage.setItem("pessoa",JSON.stringify(pessoa))

//para se obter a pessoa é necessario converte-la novamente para um obj com o JSON.parse()
const obterPessoa = localStorage.getItem("pessoa")
const obj = JSON.parse(obterPessoa)
console.log(obj)
