//exportando a classe como padrao
export default class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf
    }

    //tira os pontos e traço do cpf
    cpflimpo(){
        return this.cpf.replace(/\D+/g,'')
    }
    
    
    valida(){
        //retorna false se o valor for undefined,maior ou menor que 11 e se os numeros forem iguais
        const CpfLimpo = this.cpflimpo()
        if(typeof CpfLimpo === 'String') return false
        if(CpfLimpo.length !== 11) return false
        if(this.sequencia()) return false

        //remove os dois ultimos digitos
        const cpfParcial = CpfLimpo.slice(0,-2)
        //chama a funçao que calcula os dois ultimos digitos
        const digito1 = ValidaCpf.criaDigito(cpfParcial)
        const digito2 = ValidaCpf.criaDigito(cpfParcial + digito1)
        //junta os dois ultimos digitos com o resto do cpf
        const novoCPF = cpfParcial + digito1  + digito2

        //compara os cpf informado com o cpf gerado
        return novoCPF === CpfLimpo
    }

    //quando noa usar chaves da classe,o metodo pode se tornar estatico
    static criaDigito(cpfparcial){
        //joga os numeros do cpf em um array
        const cpfArray =  Array.from(cpfparcial)

        //contador regressivo
        let cont = cpfArray.length + 1
        //multiplica os numeros pelo seu indice de forma decrescente
        const total = cpfArray.reduce((ac,valor) => {
            ac += (Number(valor) * cont)
            cont--
            return ac
        },0)

        //formula que encontra o digito
        const digito = 11 - (total % 11)

        //se o digito for maior que 9 retorna 0
        return digito > 9 ? '0' : String(digito)

    }

    //compara todos os numeros para ver se nao sao todos iguais
    sequencia(){
        const cpfParcial = this.cpflimpo()
        const sequencia = cpfParcial[0].repeat(cpfParcial.length)
        return sequencia === cpfParcial
    }

}

const temp = new ValidaCpf('560.431.498-69')
console.log('aoobaa,bao?')
