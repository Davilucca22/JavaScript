function calcula(){
    let peso = document.querySelector('#Peso').value
    let altura = document.querySelector('#altura').value
    let saida = document.querySelector('#saida')

    if(peso.length === 0){
        alert('peso invalido!')
    }else if(altura.length === 0){
        alert('altura invalida')
    }else{
    
        const imc = peso/altura**2

        if(imc < 18.5){
            saida.style.backgroundColor = '#ced1d1'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(abaixo do peso)`
        }else if(imc < 24.9){
            saida.style.backgroundColor = '#0abad1'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(peso normal)`
        }else if(imc < 29.9){
            saida.style.backgroundColor = '#d1a30a'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(sobrepeso)`
        }else if(imc < 34.9){
            saida.style.backgroundColor = '#961108'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(obesidade 1)`
        }else if(imc < 39.9){
            saida.style.backgroundColor = '#750d06'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(obesidade 2)`
        }else{
            saida.style.backgroundColor = '#580a04'
            saida.innerHTML = `seu IMC é de ${imc.toFixed(2)}(obesidade 3)`
        }
    }
}
