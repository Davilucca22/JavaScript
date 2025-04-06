const express = require('express')
const app = express()

//assim q o servidor é iniciado, um formalario é criado como metodo de resposta.
app.get('/',(req, resp) =>{
    resp.send(`<form action="/" method="POST" autocomplete="OFF">
            Nome: <input type="text" name="nome">
            <button>enviado</button>
        </form>`)
})

//quando o formulario é enviado,é mostrado a mensagem formulario enviado
app.post('/',(req, res) => {
    res.send('formulario enviado!')
})

//inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor ativo')
})
