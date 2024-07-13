//01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

function vetor(){
    var num = [1,5]
    var temp = 0
    
    if(num[0] > num[1]){
        temp = num[1]
        num[1] = num[0]
        num[0] = temp
    }

    console.log(num)
}

vetor()