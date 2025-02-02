

function verificar(){
    //pega o ano atual
    var data = new Date()
    var ano = data.getFullYear()

    //pega o valor do ano digitado pelo usuario
    var nasc = document.querySelector('#anonasc')
    var nascAno = parseInt(nasc.value);

    //calcula a idade do usuario
    var idade = ano - nascAno

    if(Number(anonasc.value) >= ano || Number(anonasc.value) <= 0){
        alert('valores invalidos')

    }else{
        var result = document.querySelector('#saida')
        var genero = ''
        var sexo = document.getElementsByName('sex')
        var img = document.createElement('img')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/homemcriança.jpg')
            }else if(idade < 20){
                img.setAttribute('src','imagens/homemadolescente.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            }else {
                img.setAttribute('src','imagens/homemidoso.jpg')
            }

        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/mulhercriança.jpg')
            }else if(idade < 20){
                img.setAttribute('src','imagens/mulheradolescente.jpg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/mulheradulta.jpg')
            }else{
                img.setAttribute('src','imagens/mulheridosa.jpg')
            }
        }
    }
    result.innerHTML = `Detectamos ${genero} com ${idade} anos`
    result.appendChild(img)

}

