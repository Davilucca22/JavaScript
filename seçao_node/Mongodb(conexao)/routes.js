const express = require('express')
const route = express.Router()
//importa as funçoes do homecontroller
const home = require('./src/controllers/homecontroller')
const contato = require('./src/controllers/contatocontroller')

//exemplo simples de middleware(funçao)
/*function funcaoum(req, res, next) {
    console.log()
    console.log('middleware aqui!!!!')
    console.log()

    //o next() serve para esse middleware chamar o proximo assim q ele chegar ao fim
    next()
}*/

//rotas da home
//essa maneira de chamar um middleware permite usa-lo apenas em um verbo,no caso 'get'
//route.get('/',funcaoum , home.paginaInicial)
route.get('/',home.paginaInicial) //essa maneira de chamar um middleware permite usa-lo apenas em um verbo,no caso 'get'
route.post('/', home.formulario)

//rota de contato
route.get('/contato', contato.paginaInicial)

module.exports = route