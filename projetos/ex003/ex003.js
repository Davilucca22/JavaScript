function contar(){

    ///pega o valor das variaveis
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var resultado = document.querySelector('#resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 ){
        alert('verifique os valores digitados!')
    }else{
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('considerando passo 1')
            p = 1
        }

        if(i > f){
            for(let c = i;c >= f;c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = i;c <= f;c += p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F6A9}`
    }
}