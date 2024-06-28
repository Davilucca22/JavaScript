function contar(){

    ///pega o valor das variaveis
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var resultado = document.querySelector('#resultado')

    ///contador
    var cont = inicio

    while(cont <= fim){
        resultado.innerHTML =
        cont++
    }

}