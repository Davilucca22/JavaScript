//exportando funçoes para as rotas 

exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST" autocomplete="OFF">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>`)
}

exports.formulario = (req, res) => {
    res.send('formulario enviado!')
}