//importa as rotas
const express = require('express')
const app = express()
const routes = require('./routes')
const { default: helmet } = require('helmet')
const cookieParser = require('cookie-parser')
const csurf = require('csurf')
const { CsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

//proteçao basica no site
app.use(helmet())

// Parser para cookies (necessário para csurf com cookies)
app.use(cookieParser())

//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//proteçao com csrf 
app.use(csurf({ cookie:true }))

// Middleware que insere o token nas views
app.use(csrfMiddleware)

// Middleware para tratar erros CSRF
app.use(CsrfError)

//usa as rotas
app.use(routes)

//nome e caminho da pasta onde o arquivo "html" ficara
app.set('views', './src/views')

//indica a engine q sera instalada, no caso ejs
app.set('view engine', 'ejs')

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor ativo')
})
