let num = [2,6,4,8,1,7,5,9]

//push() adiciona um elemento ao vetor na ultima posiçao
num.push(3)

//sort() organiza os valores em ordem crescente
console.log(`O Vetor tem ${num.sort()} `)

/*for(let pos = 0;pos < num.length;pos++){
    console.log(num[pos])
}*/

for(let pos in num){
    console.log(`na posiçao ${pos} se encontra o numero ${num[pos]}` )
}

//indexOf() proucura um elemeto no vetor e retorna sua posiçao,retorna -1 se nao ouver o elemento
console.log(`o numero 4 esta na posiçao ${num.indexOf(4)}`)