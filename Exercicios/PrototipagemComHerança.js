/*Crie um construtor Veiculo e um construtor Bicicleta que herde de Veiculo.
Veiculo deve ter um método movimentar e Bicicleta deve ter um método pedalar.
O método movimentar deve ser sobreposto em Bicicleta para imprimir 
"A bicicleta está em movimento".*/

function Veiculo(tipo){
    this.tipo = tipo
}

Veiculo.prototype.movimentar = function(){
    console.log(`${this.tipo} esta em movimento`)
}

function Bicicleta(marca) {
    Veiculo.call(this,'bicicleta')
    this.marca = marca
}

Bicicleta.prototype = Object.create(Veiculo.prototype)
Bicicleta.prototype.constructor = Bicicleta

Bicicleta.prototype.movimentar = function(){
    console.log('a bicicleta esta se movendo')
}

Bicicleta.prototype.pedalar = function(){
    console.log('a bicicleta esta sendo pedalada')
}

const bike = new Bicicleta('caloi')

bike.movimentar()
bike.pedalar()
