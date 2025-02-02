function Pessoa(nome){
    this.nome = nome
}

Pessoa.prototype.saudar = function() {
    console.log(`ola,meu nome é ${this.nome}`)
}

const P1 = new Pessoa('Davi')

P1.saudar()