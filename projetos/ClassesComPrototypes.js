/*Crie um construtor Carro com as propriedades marca e modelo.
Adicione um método exibirInfo no protótipo que imprime "Marca: [marca], Modelo: [modelo]".
Adicione um método velocidadeMaxima ao protótipo de Carro.
O método deve retornar uma string indicando a velocidade máxima do carro.
Por exemplo, "A velocidade máxima é 180 km/h".*/

function Carro(marca,modelo){
    this.marca = marca
    this.modelo = modelo
}

Carro.prototype.info = function(){
    console.log(`Marca:${this.marca} Modelo:${this.modelo}`)
}

Carro.prototype.VelMax = function() {
    console.log('a velocidade maxima é de 300km/h')
}

const Car  = new Carro('toyota','supra mk4')
Car.info()
Car.VelMax()