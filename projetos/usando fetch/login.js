function iniciar(){
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

window.onload = iniciar