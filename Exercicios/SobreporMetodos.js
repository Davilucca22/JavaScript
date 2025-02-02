/*Sobreponha o método saudar em Funcionario.
O novo método saudar deve imprimir "Olá, meu nome é [nome] e eu sou [cargo]!"*/

function Pessoa(nome) {
    this.nome = nome
}

Pessoa.prototype.saudar = function() {
    console.log(`ola,meu nome é ${this.nome}`)
}

function Funcionario(nome,cargo){
    Pessoa.call(this,nome)
    this.cargo = cargo
}

Funcionario.prototype = Object.create(Pessoa.prototype)
Funcionario.prototype.constructor = Funcionario

Funcionario.prototype.mostaCargo = function (){
    console.log(`eu sou ${this.cargo}`)
}

Funcionario.prototype.saudar = function(){
    console.log(`ola,meu nome é ${this.nome} e eu sou ${this.cargo}`)
}

const Funcionario2 = new Funcionario('Lucas','garoto de programa')

Funcionario2.saudar()
Funcionario2.mostaCargo()
