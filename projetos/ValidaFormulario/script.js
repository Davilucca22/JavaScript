class Formulario{
    constructor(nome,sobrenome,CPF,usuario,senha1,senha2){
        this.nome = nome
        this.sobrenome = sobrenome
        this.CPF = CPF
        this.usuario = usuario
        this.senha1 = senha1
        this.senha2 = senha2
    }

    //se os inputs estiverem vazios as mensagens de 'campo vazio' aparecem,senao as mensagens ficam invisiveis
    Vazio(){
        const nomeVazio = document.querySelector('#NomeVazio')
        if(this.nome === ''){
            nomeVazio.style.display = 'block'
        }else{
            nomeVazio.style.display = 'none'
        }

        const sobrenomeVazio = document.querySelector('#SobrenomeVazio')
        if(this.sobrenome === ''){
            sobrenomeVazio.style.display = 'block'
        }else{
            sobrenomeVazio.style.display = 'none'
        }

        const CpfVazio = document.querySelector('#CPfVazio')
        if(this.CPF === ''){
            CpfVazio.style.display = 'block'
        }else{
            CpfVazio.style.display = 'none'
        }

        const usuVazio = document.querySelector('#UsuVazio')
        if(this.usuario === ''){
            usuVazio.style.display = 'block'
        }else{
            usuVazio.style.display = 'none'
        }

        const senha1Vazio = document.querySelector('#Senha1Vazio')
        if(this.senha1 === ''){
            senha1Vazio.style.display = 'block'
        }else{
            senha1Vazio.style.display = 'none'
        }

        const senha2Vazio = document.querySelector('#Senha2Vazio')
        if(this.senha2 === ''){
            senha2Vazio.style.display = 'block'
        }else{
            senha2Vazio.style.display = 'none'
        }
    }

    //verifica o tamanho do nome de usuario e mostra a mensagem caso o tamanho nao se enquadre
    ValidaUsuario(){
        const Caracter = document.querySelector('#UsuCaractere')
        const UsuType = document.querySelector('#Usuconfig') 
        if(typeof this.usuario != 'string' || typeof this.usuario != 'number'){
            UsuType.style.display = 'block'
        }else{
            UsuType.style.display = 'none'
        }

        if(this.usuario.length < 3 || this.usuario.length > 12){
            Caracter.style.display = 'block'
        }else{
            Caracter.style.display = 'none'
        }
    }

    //verifica se as duas senhas sao iguais e verificao o tamanho da senha
    ValidaSenha(){
        const aviso = document.querySelector('#AvisoSenha')
        if(this.senha1 === this.senha2){
            aviso.style.display = 'none'
        }else{
            aviso.style.display = 'block'
        }

        const Senha = document.querySelector('#SenhaInvalida')
        if(this.senha1.length < 6 || this.senha1.length > 12){
            Senha.style.display = 'block'
        }else{
            Senha.style.display = 'none'
        }
    }

    Cpflimpo(){
        return this.CPF.replace(/\D+/g,'')
    }

    ValidaCpf(){
        const CpfLimpo = this.Cpflimpo()
        if(typeof CpfLimpo === 'String') return false
        if(CpfLimpo.length != 11) return false
        if(this.SeSequencia()) return false

        const CpfParcial = CpfLimpo.slice(0,-2)

        const digito1 = Formulario.CriaDigito(CpfParcial)
        const digito2 = Formulario.CriaDigito(CpfParcial + digito1)
        const novoCpf = CpfParcial + digito1 + digito2

        return novoCpf === CpfLimpo
    }

    MostraAviso(){
        const AvisoCpf = document.querySelector('#CpfInvalido')
        const Valido = this.ValidaCpf()
        if(!Valido){
            AvisoCpf.style.display = 'block'
        }else{
            AvisoCpf.style.display = 'none'
        }
    }

    static CriaDigito(CpfParcial){
        const cpfArray = Array.from(CpfParcial)

        let contador = cpfArray.length + 1

        const total = cpfArray.reduce((ac,valor) => {
            ac += (Number(valor) * contador)
            contador--
            return ac
        },0)

        const digito = 11 - (total % 11)

        return digito > 9 ? '0' : String(digito)
    }

    SeSequencia(){
        const cpfparcial = this.Cpflimpo()
        const sequencia = cpfparcial[0].repeat(cpfparcial.length)
        return sequencia === cpfparcial
    }

    Chama(){
        this.Vazio()
        this.ValidaUsuario()
        this.ValidaSenha()
        this.ValidaCpf()
        this.MostraAviso()
    }


}

const enviar = document.querySelector('#enviar')

enviar.addEventListener('click',() =>{
    const Nome = document.querySelector('#Nome').value
    const SobreNome = document.querySelector('#Sobrenome').value
    const cpf = document.querySelector('#CPF').value
    const Usuario = document.querySelector('#usuario').value
    const Senha1 = document.querySelector('#Senha').value
    const Senha2 = document.querySelector('#ConfirmSenha').value
    
    const Form = new Formulario(Nome,SobreNome,cpf,Usuario,Senha1,Senha2)
    Form.Chama()
})