class Veiculos{
    constructor(nome,velocidade){
        this.nome = nome
        this.velocidade = 0
    }

    Acelerar(){
        this.velocidade ++
    }
}

class Carro extends Veiculos{
    constructor(nome,velocidade){
        super(nome,velocidade)
    }

    Acelerar(){
        this.velocidade += 5
    }
}


class Bike extends Veiculos{
    constructor(nome,velocidade){
        super(nome,velocidade)
    }
    
    Acelerar(){
        this.velocidade += 2
    }
}

const Carro1 = new Carro('supra')
const Bike1 = new Bike('BMX')

Carro1.Acelerar()
Bike1.Acelerar()



console.log(Carro1)
console.log(Bike1)