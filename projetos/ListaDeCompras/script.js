//funçao para puxar os elementos do localStorage e montar a tabela
function iniciar(){
    const lista = localStorage.getItem("tudo")
    const conversao = JSON.parse(lista)
    criaTabela(conversao)
}

const btn_enviar = document.querySelector('#enviar')

const tudo = []

//classe molde para armazenar as informaçoes do produto
class Produto {
    constructor(nome,quantidade){
        this.nome = nome
        this.quantidade = quantidade
    }
}


//funçao para criar a tabela com as infomaçoes passadas pelo usuario
function criaTabela(tudo){
    const corpoTabela = document.querySelector('#corpoTabela')
    for(let i = 0;i <= tudo.length ; i++){
        const linha = document.createElement('tr')
        const coluna1 = document.createElement('td')
        const coluna2 = document.createElement('td')
        coluna1.innerHTML = tudo[i].nome
        coluna2.innerHTML = tudo[i].quantidade
        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        corpoTabela.appendChild(linha)
    }
    return corpoTabela
}


//limpa os inputs e a tabela para receber os novos itens
function limpaTudo(){
    const corpoTabela = document.querySelector('#corpoTabela')
    const produto = document.querySelector('#Produto')
    const quantidade = document.querySelector('#Quantidade')
    corpoTabela.innerHTML = ''
    produto.value = ''
    quantidade.value = ''
}


//ao clicar o botao enviar,o programa cria um novo obj a partir da classe Produto e armazena no array
btn_enviar.addEventListener('click',() => {
    const produto = document.querySelector('#Produto').value
    const quantidade = document.querySelector('#Quantidade').value
    if(produto == '' || quantidade == ''){
        alert('Preencha os campos!')
    }else{
        const temp = new Produto(produto,quantidade)
        tudo.push(temp)
        localStorage.setItem("tudo",JSON.stringify(tudo))
        limpaTudo()
        criaTabela(tudo)

    }
})

