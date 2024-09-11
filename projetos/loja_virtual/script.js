//funçao que cria os links do menu
function links(){
    const carrinho = document.querySelector('#Carrinho')
    carrinho.addEventListener('click',() =>{
        window.open('telas/Carrinho/Carrinho.html')
    })

    const favoritos = document.querySelector('#favoritos')
    favoritos.addEventListener('click',() => {
        window.open('telas/favoritos.html')
    })

    const promoçoes = document.querySelector('#promoçao')
    promoçoes.addEventListener('click',() => {
        window.open('telas/promoçoes/promoçoes.html')
    })

}

links() 

//objeto base para criar um produto
function Produtos(nome,preço,img){
    this.nome = nome,
    this.preço = preço,
    this.img = img
}


//funçao que cria uma div e uma imagem do produto,joga a imagem dentro da div e a div dentro da section no HTML
Produtos.prototype.mostraProduto = function () {
    const fundo = document.querySelector('#produtos')
    const div = document.createElement('div')
    div.className = 'item'
    const img = document.createElement('img')
    img.setAttribute('src',this.img)
    const nomeProduto = document.createElement('p')
    nomeProduto.classList = 'produto'
    const precoProduto = document.createElement('p')
    precoProduto.className = 'preco'
    nomeProduto.innerText = this.nome[0].toUpperCase() + this.nome.substr(1)
    precoProduto.innerText = `R$${this.preço}`
    div.appendChild(img)
    div.appendChild(nomeProduto)
    div.appendChild(precoProduto)
    fundo.appendChild(div)

}

Produtos.prototype.clica = function () {
    const produto = document.querySelector('.item')
    produto.addEventListener('click',() => {
        window.open('telas/produto/telaProduto.html')
    })
}


//produto controle
const Controle = new Produtos('Controle Gamer TGT T90, PC/PS3/Android, Verde, TGT-T90-GR01','89,99','imagens/controle.png')
//associa o prototype do controle ao do Produtos
Controle.prototype = Object.create(Produtos.prototype)
Controle.prototype.constructor = Controle

//chama a funçao mostraProduto
Controle.mostraProduto()
Controle.clica()


//produto monitor
const Monitor = new Produtos('Monitor Gamer TGT Altay T4H, 24 Pol, VA, FHD, 1ms, 165Hz, FreeSync, HDMI/DP, TGT-ATT4H-BL02','699,99','imagens/monitor.png')

Monitor.prototype = Object.create(Produtos.prototype)
Monitor.prototype.constructor = Monitor

Monitor.mostraProduto()

//produto mouse
const Mouse = new Produtos('Mouse Gamer Pichau Hive P1, RGB, 16000DPI, 6 Botoes, Preto, PG-HP1-RGB01','129,99','imagens/mouse.png')

Mouse.prototype = Object.create(Produtos.prototype)
Mouse.prototype.constructor = Mouse

Mouse.mostraProduto()

//produto cadeira
const Cadeira = new Produtos('Poltrona Gamer Pichau AC50, Obsidian, PG-PLNA-OBS ','1.289,99','imagens/cadeira.png')

Cadeira.prototype = Object.create(Produtos.prototype)
Cadeira.prototype.constructor = Cadeira

Cadeira.mostraProduto()

//produto fonte
const Fonte = new Produtos('Fonte Pichau Nidus, 1200W, Full Modular, 80 Plus Gold, Preto, PG-1201-BR','1299,99','imagens/fonte.png' )

Fonte.prototype = Object.create(Produtos.prototype)
Fonte.prototype.constructor = Fonte

Fonte.mostraProduto()


//produto microfone
const Microfone = new Produtos('Microfone Mancer Horcrux, RGB, USB, Preto, MCR-HCRX-BL01','179,99','imagens/microfone.png')

Microfone.prototype = Object.create(Produtos.prototype)
Microfone.prototype.constructor = Microfone

Microfone.mostraProduto()
