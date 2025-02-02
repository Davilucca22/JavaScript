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

const tudo = []

//recupera os usuarios ao iniciar a janela
function iniciar(){
    const dados = localStorage.getItem('Usuarios')
    if(dados){
        const conversao = JSON.parse(dados)
        tudo.push(...conversao)
    }
}

//armazena a classe no localStorage
function Armazena(obj){
    tudo.push(obj)
    localStorage.setItem('Usuarios',JSON.stringify(tudo))
    return tudo
}

//verifica se a data é valida
function validaData(data){
    const date = new Date(data)

    return !isNaN(date.getTime())
}

//faz o que o proprio nome diz 
function FormataData(data){
    let separa = data.split("-")

    let inverte = separa.reverse()

    let junta = inverte.join("/")

    return junta
}

//limpa todos os campos
function limpaInput(nome,email,senha,data){
    nome.value = ''
    email.value = ''
    senha.value = ''
    data.value = ''
}

//cria uma tabela que mostra todos os usuarios  cadastrados
function mostraUsuarios(){
    const dados = localStorage.getItem('Usuarios')
    const convert = JSON.parse(dados)

    const div = document.querySelector('#pessoas')

    const table = document.createElement('table')

    const cabeçao  = document.createElement('tr')

    const nome  = document.createElement('th')
    nome.innerText = 'Nome'

    const email  = document.createElement('th')
    email.innerText = 'E-Mail'

    const sexo = document.createElement('th')
    sexo.innerText = 'Sexo'

    const dataNasc  = document.createElement('th')
    dataNasc.innerText = 'Data-Nascimento'

    cabeçao.appendChild(nome)
    cabeçao.appendChild(email)
    cabeçao.appendChild(sexo)
    cabeçao.appendChild(dataNasc)

    table.appendChild(cabeçao)

    for(let c of convert){

        const tr = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.innerText = c.nome

        const td2 = document.createElement('td')
        td2.innerText = c.email

        const td3 = document.createElement('td')
        td3.innerText = c.sexo

        const td4 = document.createElement('td')
        td4.innerText = c.dataNasc

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        table.appendChild(tr)

    }

    div.appendChild(table)

}

//essa funçao faz o html da tela de login ser carregado depois que o cadastro é validado.
async function carregaPagina(){
    const doc = document.querySelector('.html')
    const pagina = await fetch('telaLogin.html')
    const response = await pagina.text()
    doc.innerHTML = response

    mostraUsuarios()
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
    const pessoa = new Usuario()

    if(nome.value === '' || email.value === ''){

        nome.placeholder = 'preencha o campo devidamente'
        email.placeholder = 'preencha o campo devidamente'

    }else{

        //valida a senha
        if(senha.value.length < 8 || senha.value.length > 8){
            alert('senha deve ter 8 caracteres')
        }else{
            //add o sexo na classe
            if(masc === 'on'){
                pessoa.sexo = 'masculino'
            }else{
                pessoa.sexo = 'feminino'
            }

            if(validaData(dataNasc.value)){
                pessoa.nome = nome.value.toUpperCase()
                pessoa.email = email.value.toUpperCase()
                pessoa.senha = senha.value
                pessoa.dataNasc = FormataData(dataNasc.value)

                Armazena(pessoa)
                limpaInput(nome,email,senha,dataNasc)
                carregaPagina()
            }else{
                alert('selecione uma data valida!')
            }
        }
    }
})

window.onload = iniciar
