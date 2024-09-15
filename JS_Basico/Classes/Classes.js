//nome da classe sempre comça com maiuscula
//classes nao precisam de vigula para separar seus valores
class Pessoas{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }

    beber(){
        console.log(`${this.nome} esta bebendo`)
    }
}

const p1 = new Pessoas('davi','lucca')
const p2 = new Pessoas('larissa','lucca')

console.log(p1)
console.log(p2)