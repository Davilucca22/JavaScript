//Dado um array de strings, filtre as palavras que contêm as letras "a" e "e" (em qualquer ordem).

const lista = ['casa','tapete','sapato','tigre','mouse','indio','moto','computador','dormir','parede']

const contemAeE = lista.filter(valor => valor.includes("a") && valor.includes("e"))

console.log(contemAeE) 
