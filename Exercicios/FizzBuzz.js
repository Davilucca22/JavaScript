//escreva uma funçao que faça as seguintes coisas:
//retorne 'fizz' se um numero for divisivel por 3
//retorne 'buzz' se um numero for divisivel por 5
//retorne 'fizzbuzz' se um numero for divisivel por 3 e 5
//retorne o valor digitado caso o valor nao seja numero
//retorne o valor digitado caso o numero nao seja divisivel por 3 e 5


function FizzBuzz(num){
    if (typeof num == 'number'){
       if(num % 3 == 0 && num % 5 == 0){
            return 'FizzBuzz'
        }else if(num % 3 == 0){
            return 'Fizz'
        }else if(num % 5 == 0 ){
            return 'Buzz'
        }
        return num
    }
    return num
}

for(let i = 0;i <= 100;i++){
    console.log(i, FizzBuzz(i))
}