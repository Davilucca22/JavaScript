/*Crie um construtor Funcionario que herda de Pessoa.
O Funcionario deve ter uma propriedade adicional cargo.
Adicione um método mostrarCargo no protótipo de Funcionario que imprime "Eu sou [cargo]"*/

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

const Funcionario2 = new Funcionario('Lucas','garoto de programa')

Funcionario2.saudar()
Funcionario2.mostaCargo()
