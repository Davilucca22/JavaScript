//escreva uma funçao que escreva dois numeros e escreva o maior deles

function rand(min,max){
    let alet = Math.random() * (min + max) - min
    return Math.floor(alet)
}

function maior(x,y){
    if(x > y){
        return console.log(`o maior numero é ${x}`) 
    }else if (y > x){
        return console.log(`o maior numero é ${y}`)
    }
    return console.log('os numeros sao iguais')
}

num1 = rand(0,15)
num2 = rand(0,15)

console.log(`os numeros sorteados foram ${num1} e ${num2}`)
maior(num1,num2)
