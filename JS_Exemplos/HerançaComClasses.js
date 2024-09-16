class Dispositivo {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' ja esta ligado')
            return 
        }else{
            this.ligado = true
        }
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' ja esta desligado')
        }else{
            this.ligado = false
        }
    }

}

//extends torna o Celular filho do Dispositivo(Celular erda todos os metodos do Dispositivo)
class Celular extends Dispositivo{
    constructor(nome,modelo){
        //super() pega os parametros da classe pai
        super(nome)
        this.modelo = modelo
    }
}

const c1 = new Celular('motorola','G22')
c1.ligar()
console.log(c1)