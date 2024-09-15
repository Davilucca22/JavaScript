const ListaAlunos = []

const nome = document.querySelector('#Nome')
const cpf = document.querySelector('#CPF')
const salvar = document.querySelector('#Salvar')
const mostaAluno = document.querySelector('#Mostraralunos')

//gera um numero de matricula aleatório entre 0 e 1000
function temp(min = 0, max = 1000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

//cria e add um objeto com os dados do aluno no array
function AddLista(nome,cpf){
    const obj = Object.create({})
    obj.matricula = temp()
    obj.nome = nome
    obj.cpf = cpf
    ListaAlunos.push(obj)
}

cont = 0

//add as informaçoes dos alunos na tabela
function AddTabela(){
    const tabela = document.querySelector('#corpoTabela')
    const linhaTabela = document.createElement('tr')
    const matriculaTabela = document.createElement('td')
    const nomeTabela = document.createElement('td')
    const cpfTabela = document.createElement('td')
    matriculaTabela.textContent = ListaAlunos[cont].matricula
    nomeTabela.textContent = ListaAlunos[cont].nome
    cpfTabela.textContent = ListaAlunos[cont].cpf
    linhaTabela.appendChild(matriculaTabela)
    linhaTabela.appendChild(nomeTabela)
    linhaTabela.appendChild(cpfTabela)
    tabela.appendChild(linhaTabela)
}

//limpa os inputs
function limpaInput(){
    nome.value = ''
    nome.focus()
    cpf.value = ''
}

//poe o numero da matricula como id do objeto com as informaçoes do aluno
function organizaMatricula(){
    const novalista = new Map()
    for(let aluno of ListaAlunos){
        const { matricula } = aluno
        novalista.set(matricula,{...ListaAlunos})
    }
}

//monitora  o evento de clique no botao de salver e chama as funçoes
salvar.addEventListener('click',() => {
    if(nome.value === '' || cpf.value === ''){
        alert('preencha os campos necessarios')
    }else{
        AddLista(nome.value,cpf.value)
        limpaInput()
        temp()
        AddTabela()
        organizaMatricula() 
        cont++
    }
})

nome.addEventListener('keyup',e =>{
    if(e.keyCode == 13){
        cpf.focus()
    }
})

cpf.addEventListener('keyup',e =>{
    if(e.keyCode == 13){
        AddLista(nome.value,cpf.value)
        limpaInput()
        temp()
        AddTabela()
        organizaMatricula() 
        cont++
    }
})