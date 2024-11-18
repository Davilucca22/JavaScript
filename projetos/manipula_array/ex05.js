let vetor = []


//funçao para adicionar o item ao vetor e mostra-lo na section
function addvetor(){
    //pega os valores dos inputs
    var num = Number(document.getElementById('numero').value)
    var list = document.getElementById('lista')

    //verifica se os inputs atendem aos requisitos para adicionar um item ao vetor
    if(num == '' || num < 1 || num > 100){
        alert('[ERROR!] Digite um valor valido!')
    }else{
        vetor.push(num)
        list.value = ''
    }


    //cria um option no select e mostra na tela o valor digitado
    for(let cont in vetor){
        let item = document.createElement('option')
        item.text = `numero ${vetor[cont]} adicionado.`
        list.appendChild(item)
    }
}


//funçao para mostrar os detalhes do vetor.
function final(){
    //veririfica se o vetor esta vazio
    if(vetor.length == 0){
        alert('[ERROR]lista vazia!')
    }else{
        var saida = document.getElementById('saida')

        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0

        //proucura o maior e menor valor do vetor
        for(var pos in vetor){
            if(vetor[pos] > maior){
                maior = vetor[pos]
            }else if(vetor[pos] < menor){
                menor = vetor[pos]
            }

            //soma todos os elementos do vetor
            soma += vetor[pos]
        }
        
        //calcula a media dos elementos do vetor
        let media = soma / vetor.length

        //limpa o paragrafo
        saida.innerHTML = ''

        //mostra os detalhes do vetor na tela
        saida.innerHTML += `ao todo,há ${vetor.length} valores na lista`
        saida.innerHTML += `<p>o maior valor informado foi ${maior}</p>`
        saida.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        saida.innerHTML += `<p>a soma de todos os valores é de ${soma}</p>`
        saida.innerHTML += `<p>a media dos valores da lista é de ${Math.round(media)}</p>`
}

}
