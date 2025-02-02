class Animais{
    constructor(animal) {
        this.animal = animal
    }

    FazerSom(){
        console.log(`${this.animal} diz ola`)
    }
}

class Cachorro extends Animais{
    constructor(animal,cor){
        super(animal)
    }

    FazerSom(){
        console.log(`o ${this.animal}  faz auau`)
    }

}

class Gato extends Animais{
    constructor(animal){
        super(animal)
    }

    FazerSom(){
        console.log(`${this.animal} faz miau`)
    }

}


const c1 = new Animais('pessoa')
const c2 = new Cachorro('cachorro')
const c3 = new Gato('Gato')
c1.FazerSom()
c2.FazerSom()
c3.FazerSom()
