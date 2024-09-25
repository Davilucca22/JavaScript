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

        const curta = document.querySelector('#SenhaCurta')
        const longa = document.querySelector('#SenhaLonga')
        if(this.senha1.length < 6 ){
            curta.style.display = 'block'
        }else if(this.senha1.length > 12){
            curta.style.display = 'none'
            longa.style.display = 'block'
        }else{
            curta.style.display = 'none'
            longa.style.display = 'none'
        }
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
    Form.ValidaUsuario()
    Form.ValidaSenha()
})