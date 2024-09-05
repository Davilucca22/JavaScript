function links(){
    const carrinho = document.querySelector('#Carrinho')
    carrinho.addEventListener('click',() =>{
        window.open('telas/Carrinho.html')
    })

    const favoritos = document.querySelector('#favoritos')
    favoritos.addEventListener('click',() => {
        window.open('telas/favoritos.html')
    })

    const promoçoes = document.querySelector('#promoçao')
    promoçoes.addEventListener('click',() => {
        window.open('telas/promoçoes.html')
    })

}

links()

//objeto base para criar o produto
function Produtos(nome,preço,img){
    this.nome = nome,
    this.preço = preço,
    this.img = img
}


//funçao que cria uma div e uma imagem do produto,joga a imagem dentro da div e a div dentro da section no HTML
Produtos.prototype.mostraProduto = function () {
    const fundo = document.querySelector('#produtos')
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src',this.img)
    div.appendChild(img)
    fundo.appendChild(div)

}

//produto controle
const Controle = new Produtos('controle',150,'imagens/controle.png')
//associa o prototype do controle ao do Produtos
Controle.prototype = Object.create(Produtos.prototype)
Controle.prototype.constructor = Controle

//chama a funçao mostraProduto
Controle.mostraProduto()
console.log(Controle)

//produto monitor
const Monitor = new Produtos('monitor',200,'imagens/monitor.png')

Monitor.prototype = Object.create(Produtos.prototype)
Monitor.prototype.constructor = Monitor

Monitor.mostraProduto()
console.log(Monitor)

