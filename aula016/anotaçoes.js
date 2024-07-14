function imparpar(n){
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }

}

console.log(imparpar(4))

function soma(a=0,b=0){
    return a + b
}

console.log(soma(4))

//atribuir uma funçao a uma variavel
let v = function(x){
    return x*2
}

console.log(v(5))