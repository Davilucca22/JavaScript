///estrutura onde é mostrado o maior numero do vetor

var vetor = [5,6,1,754,8,4,14,3,7,80]

var cont = 0

var maior = vetor[0]

while(cont < vetor.length){
    if(vetor[cont] > maior){
        maior = vetor[cont]
    }
    cont++
}

console.log(`o maior valor do vetor é ${maior}`)
