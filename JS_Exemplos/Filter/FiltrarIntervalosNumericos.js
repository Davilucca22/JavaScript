//Dado um array de números, filtre os números que estão no intervalo entre 10 e 50 ou entre 100 e 200.

const lista = [2,8,7,5,6,45,20,35,50,125,201,107,106,]

const intervalo = lista.filter(valor => valor >= 10 && valor <= 50 || valor >= 100 && valor <= 200)

console.log(intervalo)