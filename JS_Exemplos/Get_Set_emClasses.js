//Symbol serve para proteger a variavel,quando usado o valor da variavel se torna fixo e nao é possivel muda-lo
const _velocidade = Symbol('velocidade')
class Carro{
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    //permite alterar o valor da velocidade dentro dos requisitos propostos
    set velocidade(valor){
        if(typeof valor != 'number')return
        if(valor >= 100 || valor <= 0)return
        this[_velocidade] = valor
    }

    //uma funçao que permite trabalahr com a velocidade,mas nao altera-la
    get velocidade(){
        return this[_velocidade]
    }

    //permite aumentar  a velocidade ate 100
    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    //permite reduzir a velocidade ate 0
    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('supra')

//simula o carro aumentando de velocidade
for(let i = 0;i <= 200;i++){
    c1.acelerar()
}
//tentativa de mudar o valor da velocidade(se  o valor for menor que 100 a velocidade muda)
c1.velocidade = 2000

console.log(c1)
