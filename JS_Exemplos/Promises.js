function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

//funçao que simula o tempo de reposta de um servidor
function EsperaAi(msg,tempo){
    return new Promise((resolve,reject) => { //resolve trata a funçao e reject trata o erro
        if(typeof msg !== 'string'){
            reject(new Error)
        }

        setTimeout(() => {
            resolve(msg)
        },tempo)
    })
}


//.then faz com que a execuçao das funçoes seja chamada por ordem,a frase 2 só sera exibida apos
//a frase 1 e assim por diante

EsperaAi('frase 1',rand(1,2))
.then(resposta => { 
    console.log(resposta)
    return EsperaAi('frase 2',rand(1,2))
.then(resposta => {
    console.log(resposta)
    return EsperaAi(144,rand(1,2))
})
.then(resposta => {
    console.log(resposta)
})
.catch(e => {
        console.log(e + ': valor invalido')
    })
})


//essa frase sera mostrada primeiro porque esta fora da promise
console.log('sou o primeiro')