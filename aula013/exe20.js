///maior,menor e soma

var vetor = [1,5,2,-4,8,9,7,6,45,7]

var cont = 0

var maior = vetor[0]
var menor = vetor[0]
var soma = 0

while(cont <= vetor.length){
    if(vetor[cont] > maior){
        maior = vetor[cont]
    }
    
    if(vetor[cont] < menor){
        menor = vetor[cont]
    }

    soma = soma + vetor[cont]

    cont++
}

console.log(`o maior valor do vetor é ${maior}`)
console.log(`o menor valor do vetor é ${menor}`)
console.log(`a soma de todos os elementos do vetor é ${soma}`)