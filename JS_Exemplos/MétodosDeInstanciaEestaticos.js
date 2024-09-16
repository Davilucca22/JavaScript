class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    //metodo de instancia(as classes filhas podem acessa-lo)
    aumentaVolume(){
        this.volume += 2
    }

    //metodo de instancia(as classes filhas podem acessa-lo)
    diminuiVolume(){
        this.volume -= 2
    }

    //metodo estatico(apenas a classe pai pode acessa-lo)
    static trocaPilha(){
        console.log('ok,vou trocar')
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentaVolume()
controle1.aumentaVolume()
controle1.aumentaVolume()
//controle1.trocaPilha() da erro
ControleRemoto.trocaPilha()
console.log(controle1)