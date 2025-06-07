const express = require('express')
const route = express.Router()

//importa as funçoes do homecontroller
const { paginaInicial, formulario} = require('./src/controllers/homecontroller')
const contato = require('./src/controllers/contatocontroller')

//rotas da home
route.get('/', paginaInicial)
route.post('/', formulario)

//rota de contato
route.get('/contato', contato.paginaInicial)

module.exports = route 
