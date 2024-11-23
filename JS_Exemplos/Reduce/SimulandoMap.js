//Simule o comportamento do método map usando reduce.

const num = [1,2,3,4,5]

const suscessor = num.reduce((acumulador,valor) => {
    acumulador.push(valor + 1)
    return acumulador
},[])

console.log(suscessor)
