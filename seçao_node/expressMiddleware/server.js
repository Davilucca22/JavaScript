const express = require('express')
const app = express()
//importa as rotas
const routes = require('./routes')
const meuMiddleware = require('./src/middlewares/funcoes')


//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//usa as rotas
app.use(routes)
app.use(meuMiddleware.olamundo)

//nome e caminho da pasta onde o arquivo "html" ficara
app.set('views', './src/views')

//indica a engine q sera instalada, no caso ejs
app.set('view engine', 'ejs')

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor ativo')
})
