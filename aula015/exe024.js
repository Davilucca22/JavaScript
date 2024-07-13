//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

function crescente(){
    var vetor = [50,8,1]

    var maior = vetor[0]
    var menor = vetor[0]
    var med = vetor[0]

    for(let pos = 0;pos < vetor.length;pos++){
        if(vetor[pos] < menor){
            menor = vetor[pos]
        }

        if(vetor[pos] > maior){
            maior = vetor[pos]
        }

    }

    for(let pos in vetor){
        if(vetor[pos] > menor && vetor[pos] < maior){
            med = vetor[pos]
        }
    }

    vetor[0] = menor
    vetor[1] = med
    vetor[2] = maior

    console.log(vetor)
}

crescente()
