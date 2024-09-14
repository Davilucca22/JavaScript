/*Crie uma cadeia de protótipos onde um construtor Animal tenha um método fazerSom, e um construtor Cachorro que herde de Animal e tenha um método latir.
fazerSom deve ser sobreposto em Cachorro para imprimir "Au au!".*/

function Animal(nome){
    this.nome = nome
}

Animal.prototype.fazerSom = function(){
    console.log('cri cri cri cri')
}

function Cachorro(nome){
    Animal.call(this,nome)
}

Cachorro.prototype = Object.create(Animal.prototype)
Cachorro.prototype.constructor = Cachorro

Cachorro.prototype.fazerSom = function(){
    console.log('Au Au')
}

Cachorro.prototype.latir = function(){
    console.log('o cachorro esta latindo!')
}

const C4 = new Cachorro('milo')

C4.latir()
C4.fazerSom()


