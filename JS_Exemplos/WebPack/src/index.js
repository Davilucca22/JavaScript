const h1 = document.querySelector('#h1')
const btn = document.querySelector('#botao')

btn.addEventListener('click',() => {
    h1.innerText = 'Ola,Mundo'
})