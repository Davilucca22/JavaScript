/*fetch('pessoas.json')
.then(resultado => resultado.json())
.then(json => Crialista(json))*/


//axios faz o mesmo que fetch,mas usa menos linhas de codigo
axios('pessoas.json')
.then(resposta => Crialista(resposta.data))

function Crialista(json){
    
    const tabela = document.createElement('table')

    for(let pessoas of json){
        const linha = document.createElement('tr')

        const nome = document.createElement('td')
        nome.innerText = pessoas.nome
        linha.appendChild(nome)

        const idade = document.createElement('td')
        idade.innerText = pessoas.idade
        linha.appendChild(idade)


        const sexo = document.createElement('td')
        sexo.innerText = pessoas.sexo
        linha.appendChild(sexo)

        tabela.appendChild(linha)
        
    }

    const resultado = document.querySelector('.conteiner')
    resultado.appendChild(tabela)
}