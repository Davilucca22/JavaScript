function Pessoa(nome,sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.achou = 'fala meu patrao'

let p1 = new Pessoa('davi','lucca',19)
console.log(p1.sobrenome) 

const objA = {
    chaveA:'A'
}

const objB = {
    chaveB:'B'
}

//esta propriedade faz o objB receber a chave do objA
Object.setPrototypeOf(objB,objA)
console.log(objB.chaveA)



///////////////////////////////////////////////////////////////////////////////////////////////////////////
function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desc = function(num) { this. preco = (this.preco - (this.preco * num) / 100)}

const p2 =new  Produto('jarra',25)
p2.desc(50)
console.log(p2) 

const p3 = {
    nome:'bola',
    preco: 50
}

//aqui a funçao de desconto feita para p2 é reutilizada em p3
Object.setPrototypeOf(p3,Produto.prototype)
p3.desc(50)
console.log(p3)