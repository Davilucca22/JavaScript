import './assets/css/style.css'

const letrasmin = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const letrasmai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const numeros = ['0','1','2','3','4','5','6','7','8','9']

const caracteres = ['@','#','$','&','-','_','/','%','*','+']

//gera numeros aleatorios
function random(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

//escolhe um array e um elemento do array de forma aleatoria
function arrayAleatorio(array1 = '',array2 = '',array3 = '',array4 = ''){
    const arrayTD = []

    if(array1 !== ''){
        arrayTD.push(array1)
    }
    if(array2   !== ''){
        arrayTD.push(array2)
    }
    if(array3 !== ''){
        arrayTD.push(array3)
    }
    if(array4 !== ''){
        arrayTD.push(array4)
    }

    const indice = random(0,arrayTD.length)
    const arrayEscolhido = arrayTD[indice]

    if(arrayEscolhido.length > 10){
        const indice = random(0,25)
        return arrayEscolhido[indice]
    }else{
        const indice = random(0,9)
        return arrayEscolhido[indice]
    }

}

//monta a senha baseado na combinaçao q o usuario informar
function senha(qtd){

    const metrica = Number(qtd)

    let senha = ''

    const seNum = document.querySelector('#numeros')
    const seMai = document.querySelector('#let-mai')
    const seMin = document.querySelector('#let-min')
    const seSimb = document.querySelector('#simbols')
    const resultado = document.querySelector('.resultado')
    

    if(seMai.checked && seNum.checked && seMin.checked && seSimb.checked){
       while(senha.length < metrica){
        const funcao = arrayAleatorio(letrasmai,letrasmin,numeros,caracteres)
        senha += funcao
       }
    }
    else if(seMai.checked && seNum.checked && seMin.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,letrasmin,numeros)
            senha += funcao
           }
    }
    else if(seMai.checked && seNum.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,numeros,caracteres)
            senha += funcao
        }
    }
    else if(seMai.checked && seMin.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,letrasmin,caracteres)
            senha += funcao
        }
    }
    else if(seMai.checked && seMin.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,letrasmin)
            senha += funcao
        }
    }
    else if(seMai.checked && seNum.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,numeros)
            senha += funcao
        }
    }
    else if(seMai.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai,caracteres)
            senha += funcao
        }
    }
    else if(seMai.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmai)
            senha += funcao
        }
    }
    else if(seMin.checked && seNum.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmin,numeros,caracteres)
            senha += funcao
        }
    }
    else if(seMin.checked && seNum.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmin,numeros)
            senha += funcao
        }
    }
    else if(seMin.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmin,caracteres)
            senha += funcao
        }
    }
    else if(seMin.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(letrasmin)
            senha += funcao
        }
    }
    else if(seNum.checked && seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(numeros,caracteres)
            senha += funcao
        }
    }
    else if(seNum.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(numeros)
            senha += funcao
        }
    }
    else if(seSimb.checked){
        while(senha.length < metrica){
            const funcao = arrayAleatorio(caracteres)
            senha += funcao
        }
    }

    if(qtd === '' || qtd <= 0){
        alert('digite o tamanho da senha')
    }else{
        resultado.innerHTML = `Sua senha: ${senha}`
    }


}

const qtd = document.querySelector('#QTDcarac')
const enviar = document.querySelector('#btn')


enviar.addEventListener('click',() => {
    senha(qtd.value)    
})
