//Crie um array filtrado com base em uma condição.

const num = [0,1,2,3,4,5,6,7,8,9]

const pares = num.reduce((acumulador,valor) => {
    if(valor % 2 == 0){
        acumulador.push(valor)
    }
    return acumulador
},[])

console.log(pares)
