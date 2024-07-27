function militar(){
    let datanasc = Number(document.querySelector('#ano').value)
    let saida = document.querySelector('#saida')

    const atual = new Date()
    const ano = atual.getFullYear()

    const idade = ano - datanasc

    saida.innerHTML = `voce tem ${idade} anos</br>`
    if(idade < 18){
        saida.innerHTML += `Voce não tem idade suficiente para se alistar!volte daqui ${18-idade} anos </br>`
    }else if (idade == 18){
        saida.innerHTML += `Voce deve se alistar ainda este ano!</br>`
    }else{
        saida.innerHTML += `Voce deveria ter se alistado a ${idade - 18} anos atras</br>`
    }

}

