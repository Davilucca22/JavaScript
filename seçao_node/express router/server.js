const express = require('express')
const app = express()
//importa as rotas
const routes = require('./routes')

//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//usa as rotas
app.use(routes)

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor ativo')
})
