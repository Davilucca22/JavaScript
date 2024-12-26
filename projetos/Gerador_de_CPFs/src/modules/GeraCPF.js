//importando o padrao
import ValidaCpf from "./ValidaCpf";

export default class GeraCPF {
    random(min = 100000000,max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formataCPF(cpf){
        return(
         cpf.slice(0,3) + '.' +
         cpf.slice(3,6) + '.' +
         cpf.slice(6,9) + '-' +
         cpf.slice(9,11) 
        )
     }

    geranovoCpf(){
        const cpfSemdigito = this.random()
        const digito1 = ValidaCpf.criaDigito(cpfSemdigito)
        const digito2 = ValidaCpf.criaDigito(cpfSemdigito + digito1)
        const CpfCriado = cpfSemdigito + digito1 + digito2

        return this.formataCPF(CpfCriado)
    }

}
