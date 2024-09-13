function SlideShow(){
    const imagens = ["img/imagem 1.png","img/imagem 2.png","img/imagem 3.png"]
    const img = document.querySelector('#imagem')
    const avancar = document.querySelector('#avancar')
    const voltar = document.querySelector('#voltar')
    const input = document.querySelector('#link')
    const cad = document.querySelector('#cad')

    let cont = 0
    
    mostraImg(imagens[cont])

    cad.addEventListener('click',() => {
        if(input.value === ''){
            alert('Campo Link Vazio!')
        }else{
            imagens.push(input.value)
            input.value = ''
            input.focus()
        }
        console.log(imagens)
    })

    avancar.addEventListener('click',() => {
        if(cont < imagens.length - 1){
            cont++
            mostraImg(imagens[cont])
        }else{
           cont = 0
            mostraImg(imagens[cont])
        }
    })

    voltar.addEventListener('click',() => {
        if(cont > 0){
            cont--
            mostraImg(imagens[cont])
        }else{
            cont = imagens.length - 1
            mostraImg(imagens[cont])
        }
    })
    
    function mostraImg(link){
        return img.setAttribute('src',link)
    }
}

SlideShow()