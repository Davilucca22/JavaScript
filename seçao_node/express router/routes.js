const express = require('express')
const route = express.Router()
//importa as funçoes do homecontroller
const home = require('./controllers/homecontroller')
const contato = require('./controllers/contatocontroller')

//rotas da home
route.get('/', home.paginaInicial)
route.post('/', home.formulario)

//rota de contato
route.get('/contato', contato.paginaInicial)

module.exports = route