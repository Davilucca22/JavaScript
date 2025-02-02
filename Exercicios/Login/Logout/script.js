const enviar = document.querySelector('#enviar')
const sair = document.querySelector('#sair')
const formulario = document.querySelector('.formulario')
const logout = document.querySelector('.logout')

enviar.addEventListener('click',() => {
    const inputNome = document.querySelector('#nome')
    if(inputNome.value != ''){
        localStorage.setItem('nome',inputNome.value)

        inputNome.value = ''

        formulario.style.display = 'none'
        logout.style.display = 'block'
        

        const obtemNome = document.querySelector('#mostraNome')
        obtemNome.innerHTML = localStorage.getItem('nome').toUpperCase( )

    }else{
        alert('por favor,digite seu nome!')
    }
})

sair.addEventListener('click',() => {
    formulario.style.display = 'block'
    logout.style.display = 'none'

    localStorage.clear()

})
