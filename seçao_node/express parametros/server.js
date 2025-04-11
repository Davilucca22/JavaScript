const express = require('express')
const app = express()

//serve para tratar o body da requisicao
app.use(express.urlencoded({extended:true}))

//assim q o servidor é iniciado, um formalario é criado como metodo de resposta.
app.get('/',(req, resp) =>{
    resp.send(`<form action="/" method="POST" autocomplete="OFF">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>`)
})

//o /usuario é uma nova rota criada na pagina(qualquer caminho pode ser criado)
//:id define um parametro obrigatorio, se por "?" apos o :id ele se torna opcional(nao sei pq, mas o servidor cai quando eu torno o parametro opcional)
app.get('/usuario/:id', (req, res) => {
    res.send(req.params)
})

app.get(`/query`, (req, res) => {
    res.send(req.query)
})

//quando o formulario é enviado,é mostrado a mensagem formulario enviado
app.post('/',(req, res) => {

    res.send('formulario enviado!  ' + req.body.nome) //esse nome vem do name no input=text
})

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor ativo')
})
