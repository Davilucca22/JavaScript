//funçao para contar o tempo
function tempo(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br',{
        hour12:false,
        timeZone:'GMT'
    })
}

//inicia o contador assim que a pagina é carregada
function tiraTempo(){
    let contador = document.querySelector('#tempo')
    let n = 60
    let numb = setInterval(function(){
        contador.innerHTML = tempo(n)
        n--
        if(n == 0){
            clearTimeout(numb)
            contador.innerHTML = 'Fim de Jogo!'
            contador.style.color = 'red'
        }
    },1000)
}

tiraTempo()

//numeros aleatórios
function random(min = 0,max = 5){
    let num = Math.random() * (max - min) + min
    return Math.floor(num)
}

//mostra contas
function contas(){
    let texto = document.querySelector('#conta')
    const contas = ['2 * 3 + (5 / 3) - 4','6 * 4 + 2','12 / 4 - 4 + 3','2 * 3 - 4 / 2','22 / 2 - 5 + 3']
    const result = [3.666,26,2]
    texto.innerHTML = contas[random()]
}

contas()