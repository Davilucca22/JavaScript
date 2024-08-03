function temp(){
    let date = new Date
    return date.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}


//configura um valor de tempo para mostrar a hora atual,no caso 1000 milisegundos,ou um segundo
let timer = setInterval(function () {
    console.log(temp())
},1000)


//(é executado apenas um vez)define um limite para o timer,no caso 5000 milisegundos ou 5 segundos
setTimeout(function(){
    clearInterval(timer)
},4000)

setTimeout(function () {
    console.log('ola')
},5000)
