let pai = document.querySelector('.conteiner')
const div = document.createElement('div')

const elementos = [
    {tag:'p',texto:'frase 1'},
    {tag:'div',texto:'frase 2'},
    {tag:'footer',texto:'frase 3'},
    {tag:'section',texto:'frase 4'}
]



for (let i = 0;i < elementos.length;i++){
    let {tag,texto} = elementos[i]
    let filho  = document.createElement(tag)
    filho.innerHTML = texto
    div.appendChild(filho)
}

pai.appendChild(div)

