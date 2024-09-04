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