//"as" troca o nome da variavel importada
//import {nome as nome2,idade,sexo,soma} from './modulo1'

//console.log(nome2 ,sexo, idade,)
//console.log(soma(2,3))

//esse metodo cria um obj com todos os importados
//import * as importados from './modulo1'

//console.log(importados)
//console.log(importados.nome)

//quando há importaçao sem o uso de chaves o padrao é importado,ou seja,o arquivo que tiver a propriedade default(funçao soma no caso)
import padrao from './modulo1'

console.log(padrao)

