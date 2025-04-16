//exportando funçoes para as rotas 

exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.formulario = (req, res) => {
    res.send('formulario enviado!')
}