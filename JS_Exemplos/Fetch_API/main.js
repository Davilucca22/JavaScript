//add um monitor de eventos que captura quando um link é clicado
document.addEventListener('click',e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        //desabilita a funçao padrao do link html(carregar outra pagina)
        e.preventDefault()
        //chama a funçao
        CarregaPagina(el)
    }

})

async function CarregaPagina(el) {
    try{
        //pega o endereço do link
        const link = el.getAttribute('href')

        //carrega o link da pagina
        const response = await fetch(link)

        //verifica se o link é valido
        if(response.status !== 200) throw new Error('Error 404 not fund')
        
        //obtem o html do link
        const html = await response.text()

        //chama a funçao
        CarregaResultado(html)
    } catch(e){
        console.log(e)
    }
}

//mostra o conteudo de outra pagina sem sair da primeira
function CarregaResultado(html){
    const div = document.querySelector('#div')
    div.innerHTML = html

}

