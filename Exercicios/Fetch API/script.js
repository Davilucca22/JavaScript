//pede os dados para a API e transforma eles em um JSON
async function RequisiçaoDeDados() {
    const api = await fetch('https://jsonplaceholder.typicode.com/users')
    const transforma = await api.json()
    return transforma
}

//cria a lista de usuarios manipulando do DOM
function crialista() {
    try{
        const users = RequisiçaoDeDados()
            .then(result => {
                const lista = document.querySelector('#lista')
                for (let i in result) {
                    const li = document.createElement('li')
                    li.id = result[i].id
    
                    const nome = document.createElement('p')
                    nome.id = 'nome'
    
                    const email = document.createElement('p')
                    email.id = 'email'
    
                    const box = document.createElement('div')
                    box.id = 'box'
    
                    nome.innerText = `NAME: ${result[i].name}`
                    email.innerText = `EMAIL: ${result[i].email}`
    
                    box.appendChild(nome)
                    box.appendChild(email)
                    li.appendChild(box)
                    lista.appendChild(li)
    
                }
    
                mostraDetalhes()
            })
    }catch(e){
        alert(`ERROR: ${e}`)
    }

}

//liga e desliga a janela modal
function DesligaModal(bool) {
    const JanelaModal = document.querySelector('#modal')

    if (bool) {
        JanelaModal.style.display = 'none'
    } else {
        JanelaModal.style.display = 'block'
    }
}

function mostraDetalhes() {

    const nome = document.querySelector('#username')
    const email = document.querySelector('#EMAIL')
    const phone = document.querySelector('#phone')
    const rua = document.querySelector('#street')
    const complemento = document.querySelector('#suite')
    const cidade = document.querySelector('#city')
    const cep = document.querySelector('#Zipcode')

    //SelectorALL retorna uma nodelist, para tratar de seus elementos usasse forEach
    const element = document.querySelectorAll('li').forEach(el => { el.addEventListener('click', () => {
        try{
            RequisiçaoDeDados().then(result => {
                    //nao sei pq o id estava somando 1 ao seu valor,por isso o id-1, assim ele seleciona o usuario certo
                    nome.innerText = result[el.id-1].name
                    email.innerText = result[el.id-1].email
                    phone.innerText = result[el.id-1].phone
    
                    rua.innerText = result[el.id-1].address.street
                    complemento.innerText = result[el.id - 1].address.suite
                    cidade.innerText = result[el.id-1].address.city
                    cep.innerText = result[el.id - 1].address.zipcode

                    DesligaModal(false)

                })
            }catch(e){
                alert(`ERROR: ${e}`);
            }
        })
    })
    
}

const btn_fecha = document.querySelector('button').addEventListener('click', () => {
    DesligaModal(true)
})



window.onload = crialista