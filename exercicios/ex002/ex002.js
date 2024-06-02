   

function liga(){
    //pega os valores das caixas de marcaçao
    const homem = document.querySelector('#masc')
    const mulher = document.querySelector('#fem')
    if(homem.value == "on" && mulher.value == "off"){
        homem.value = "off"
        mulher.value = "on"
    }else{
        homem.value = "on"
        mulher.value = "off"
    }
}

function verificar(){
    const homem = document.querySelector('#masc')
    const mulher = document.querySelector('#fem')
    let texto = document.querySelector('#texto')

    //pega o ano atual
    var data = new Date()
    var ano = data.getFullYear()

    //pega a imagem 
    var img = document.querySelector('#imagem')

    //pega o valor do ano digitado pelo usuario
    var nasc = document.querySelector('#anonasc')
    var nascAno = parseInt(nasc.value);

    //calcula a idade do usuario
    var idade = ano - nascAno

    if(idade <= 12 && homem.value == "on"){
        texto.innerHTML = `<p>Ola Jovem Rapaz,voce tem ${idade} anos</p>`
        img.src ="imagens/homemcriança.jpg";
        img.alt ="criança";
    }else if(idade <= 12 && mulher.value == "on"){
        texto.innerHTML = `<p>Ola Jovem Moça,voce tem ${idade} anos</p>`
        img.src = "imagens/mulhercriança.jpg"
        img.alt = "criança"
    }else if(idade <= 22 && homem.value == "on"){
        texto.innerHTML = `<p>Ola Rapaz,voce tem ${idade} anos</p>`
        img.src = "imagens/homemadolescente.jpg"
        img.alt = "adolescente"
    }else if(idade <= 22 && mulher.value == "on"){
        texto.innerHTML = `<p>Ola Moça,voce tem ${idade} anos</p>`
        img.src = "imagens/mulheradolescente.jpg"
        img.alt = "adolescente"
    }else if(idade <= 50 && homem.value == "on"){
        texto.innerHTML = `<p>Ola Senhor,voce tem ${idade} anos</p>`
        img.src = "imagens/homemadulto.jpg"
        img.alt = "adulto"
    }else if(idade <= 50 && mulher.value == "on"){
        texto.innerHTML = `<p>Ola Senhora,voce tem ${idade} anos</p>`
        img.src = "imagens/mulheradulta.jpg"
        img.alt = "adulta"
    }else if(idade > 50 && homem.value == "on"){
        texto.innerHTML = `<p>Ola Senhor,voce tem ${idade} anos</p>`
        img.src = "imagens/homemidoso.jpg"
        img.alt = "idoso"
    }else if(idade > 50 && mulher.value == "on"){
        texto.innerHTML = `<p>Ola Senhora,voce tem ${idade} anos</p>`
        img.src = "imagens/mulheridosa.jpg"
        img.alt = "idosa"
    }else{
        alert('[ERROR] valores invalidos')
    }

}

