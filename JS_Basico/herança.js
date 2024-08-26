function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

//nao aceita arrow function
Produto.prototype.aumento = function (num) {this.preco += num}
Produto.prototype.desconto = function (num) {this.preco -= num}

//liga a camisa ao produto
function Camisa(nome,preco,cor){
    Produto.call(this,nome,preco)
    this.cor = cor
}

//liga o prototype do produto ao prototype da camisa
Camisa.prototype = Object.create(Produto.prototype)
//muda o nome do objeto mostrado no console para camisa
Camisa.prototype.constructor = Camisa

function Caneca(nome,preco){
    Produto.call(this,nome,preco)
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca



const produto = new Produto('gen',100)
const camisa = new Camisa('frio',10,'azul')
const caneca = new Caneca('xicara',15)
camisa.aumento(10)
caneca.desconto(5)
console.log(produto)
console.log(camisa)
console.log(caneca)