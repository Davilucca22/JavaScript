//importa o dotenv (arquivo onde esta a senha e login do adm do servidor)
require('dotenv').config()

//importa o express
const express = require('express')

//chama a funçao express()
const app = express()

//importa o mongoose para o projeto
const mongoose = require('mongoose')

//conecta a base de dados(o link para acesso esta em um arquivo separado para nao ser visto por qualquer pessoa)
mongoose.connect(process.env.LOGINADM).then(() => {
    console.log('CONECTEI A BASE DE DADOS')
    app.emit('pronto') //emite o status 'pronto' quando se conectar a base de dados
})

//importa as dependecias para configurar a session e as flashmesages
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')


//importa as rotas
const routes = require('./routes')

//importa meu middleware criado na pasta funçoes
const meuMiddleware = require('./src/middlewares/funcoes')

//configura a session
const sessionOptions = session({
    secret:process.env.SECRET, //o secret cria uma assinatura digital para impedir q a sessao seja alterada manualmente
    store: MongoStore.create({ mongoUrl: process.env.LOGINADM }), //store faz com q as sessoes sejam guaradadas em um banco de dados externo,nesse projeto uso o mongodb
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7, //tempo maximo da sessao uma semana
        httpOnly:true
    }
})

//usa as configuraçoes de sessao
app.use(sessionOptions)

//chama as flashmensages
app.use(flash())

//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//usa as rotas
app.use(routes)

//usa o middleware criado
app.use(meuMiddleware.olamundo)

//nome e caminho da pasta onde o arquivo "html" ficara
app.set('views', './src/views')

//indica a engine q sera instalada, no caso ejs
app.set('view engine', 'ejs')

//quando a apliçao passar pelo status "pronto", o servidor carrega a pagina
app.on('pronto', () => {
    //inicia o servidor na porta 3000
    app.listen(3000, () => {
        console.log('acessar http://localhost:3000')
        console.log('servidor ativo')
    })  
})
