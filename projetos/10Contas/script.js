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
function random(min = 0,max = 10){
    let num = Math.random() * (max - min) + min
    return Math.floor(num)
}

let rand = random()
const contas = ['2 * 3 + (5 / 3) - 4','6 * 4 + 2','12 / 4 - 4 + 3','2 * 3 - 4 / 2',
    '22 / 2 - 5 + 3','7 * 3 / 12 - (-3)','(-6) - 14 * 7 + 18','5 * 4 *  3 * 2 * 1','25 - 4 * 9 + 13','1 + 45 - 12 / 3 + (-15)']
let resultado = eval(contas[rand])



//mostra contas
function mostracontas(){
    let rand = random()
    let texto = document.querySelector('#conta')
    texto.innerHTML = contas[rand]
}


//alternativas do jogo
let alternativaA = document.querySelector('#a')
let alternativaB = document.querySelector('#b')
let alternativaC = document.querySelector('#c')
let alternativaD = document.querySelector('#d')

//muda  a posiçao da alternativa certa aleatóriamente

function alternativaCerta(){
    let n = random(1,5)
    console.log(n)
    if(n == 1){
        return alternativaA.value = resultado
    }
    if(n == 2){
        return alternativaB.value = resultado
    }
    if(n == 3){
        return alternativaC.value = resultado
    }
    if(n == 4){
        return alternativaD.value = resultado
    }
  
}
alternativaCerta()

function acertou(){
    alternativaA.addEventListener('click',function(){
        if(alternativaA.value == resultado){
           alternativaA.style.backgroundColor = 'green'
        }else{
            alternativaA.style.backgroundColor = 'red'
        }
    })
    alternativaB.addEventListener('click',function(){
        if(alternativaB.value == resultado){
            alternativaB.style.backgroundColor = 'green'
        }else{
            alternativaB.style.backgroundColor = 'red'
        }
    })
    alternativaC.addEventListener('click',function(){
        if(alternativaC.value == resultado){
            alternativaC.style.backgroundColor = 'green'
        }else{
            alternativaC.style.backgroundColor = 'red'
        }
    })
    alternativaD.addEventListener('click',function(){
        if(alternativaD.value == resultado){
            alternativaD.style.backgroundColor = 'green'
        }else{
            alternativaD.style.backgroundColor = 'red'
        }
    })
}

acertou()

function mudaValores(){
    let enviar = document.querySelector('#ok')
    
    enviar.addEventListener('click',function(){
        alternativaCerta()
        mostracontas()
    })
}

mudaValores()

