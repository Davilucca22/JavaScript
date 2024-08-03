const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')


//funçao para contar os segundos em formato de tempo
function gettime(segundos){
    const date  = new Date(segundos * 1000)
    return date.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone:'GMT'
    })
}

let paragrafo = document.querySelector('#tempo')
let n = 0
let numb;


//funçao para atualizar o paragrafo do html a cada 1 segundo
function play(){
    numb = setInterval(function(){
        paragrafo.innerHTML = gettime(n++)
    },1000) 
}


//evento de clique no botao iniciar
iniciar.addEventListener('click',function(){
    //limpa o tempo
    clearTimeout(numb)
    //inicia a comtagem
    play()
    //muda a cor do texto pra preto
    paragrafo.style.color = 'black'
})

//evento de clique no botao pausar
pausar.addEventListener('click',function (){
    clearTimeout(numb)
    paragrafo.style.color = 'red'
})

//evento de clique no botao zerar
zerar.addEventListener('click',function(){
    clearTimeout(numb)
    paragrafo.innerHTML = '00:00:00'
    paragrafo.style.color = 'black'
    n = 0
})
