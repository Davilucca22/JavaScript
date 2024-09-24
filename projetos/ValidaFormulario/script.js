class Formulario{
    constructor(nome,sobrenome,CPF,usuario,senha1,senha2){
        this.nome = nome
        this.sobrenome = sobrenome
        this.CPF = CPF
        this.usuario = usuario
        this.senha1 = senha1
        this.senha2 = senha2
    }

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

    ValidaUsuario(){
        if(typeof this.usuario != 'string' || typeof this.usuario !== 'number'){}
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
    Form.Vazio()
})