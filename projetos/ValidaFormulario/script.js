
class ValidaCpf{
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

class Formulario{
    constructor(nome,sobrenome,CPF,senha,confSenha){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = CPF
        this.senha = senha
        this.confSenha = confSenha
    }

    //verifica se todos os campos estao preenchidos e verifica as senhas
    seVazio(){
        if(!this.nome || !this.sobrenome || !this.cpf || !this.senha || !this.confSenha ){
            alert('Preencha todos os campos!')
        }else{
            if(this.confSenha === this.senha){
                alert('senhas condizem')
            }else{
                alert('senhas nao condizem')
            }
            alert('todos os campos preenchidos')
        }

    }
}

document.querySelector('#enviar').addEventListener('click',() => {
    const nome = document.querySelector('#Nome').value
    const sobrenome = document.querySelector('#Sobrenome').value
    const CPF = document.querySelector('#CPF').value
    const senha = document.querySelector('#Senha').value
    const confSenha = document.querySelector('#ConfirmSenha').value
    const Form = new Formulario(nome,sobrenome,CPF,senha,confSenha)
    Form.seVazio()
    console.log(Form)
})

