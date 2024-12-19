/*para carregar janelas com detalhes de produtos,basta criar um localStorage e mandar as informaçoes
para la,quando estiver na outra pagina basta carregar as informaçoes contidas no localStorage */

//classe molde para criar o usuario
class Usuario {
    constructor(nome,email,dataNasc,senha,sexo){
        this.nome = nome
        this.email = email
        this.dataNasc = dataNasc
        this.senha = senha
        this.sexo = sexo
    }
}

 //verifica se a checkbox esta marcada e muda seu valor para on ou off
function checkbox(){
    document.addEventListener('click',(e) => {

        if(e.target.type === 'checkbox'){
            const masc = document.querySelector('#masc')
            const fem = document.querySelector('#fem')
    
            if(e.target.id === 'masc'){
                masc.value = 'on'
                masc.checked = true
                fem.value = 'off'
                fem.checked = false
            }else{
                fem.value = 'on'
                fem.checked = true
                masc.value = 'off'
                masc.checked = false
            }
        }
         
    })
}

//chama a funçao
checkbox()

//verifica se o input esta vazio
function CampoVazio(chave,input){
    if(input.value === ''){ 
        input.placeholder = 'Preencha o Campo Corretamente...'
    }else{
        chave = input.value
        alert('campos cheios')
    }
}

//armazena a classe no localStorage
function Armazena(nome,obj){
    return localStorage.setItem(nome,JSON.stringify(obj))
}

const btn_enviar = document.querySelector('#enviar')

//evento de clique no enviar
btn_enviar.addEventListener('click',() => {
    const nome = document.querySelector('#nome')
    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')
    const dataNasc = document.querySelector('#Data-nasc')
    const masc = document.querySelector('#masc').value
    const fem = document.querySelector('#fem').value
   
    //usa o molde para criar a nova classe
    const pessoa = new Usuario(nome.value,email.value,dataNasc.value)

    CampoVazio(nome)
    CampoVazio(email)
    CampoVazio(senha)

    //add o sexo na classe
    if(masc === 'on'){
        pessoa.sexo = 'masculino'
    }else{
        pessoa.sexo = 'feminino'
    }
    
    //valida a senha
    if(senha.value.length < 8 || senha.value.length > 8){
        alert('senha deve ter 8 caracteres')
    }else{
        pessoa.senha = senha.value
    }

    //chama a funçao de armazenar
    Armazena('InfoUsuario',pessoa)
    console.log(pessoa)

})
