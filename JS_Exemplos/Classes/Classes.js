//nome da classe sempre comça com maiuscula
//classes nao precisam de vigula para separar seus valores
//as classes servem como molde para criar objetos filhos e esses objetos filhos herdam metodos de seu objeto pai.
class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} esta falando oi`)
    }

    comer(){
        console.log(`${this.nome} esta comendo`)
    }
    }

const p1 = new Pessoa('davi','lucas')
const p2 = new Pessoa('lucca','mateus')


console.log(p1)
console.log(p2)
console.log(p1.falar())
console.log(p2.falar())
