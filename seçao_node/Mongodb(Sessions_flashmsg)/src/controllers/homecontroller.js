//exportando funçoes para as rotas 

exports.paginaInicial = (req, res) => {
    req.flash('info','creatina nao é bomba') //uma mensagem flash simples
    console.log(req.flash('info')) //mostrando a mensagem
    res.render('index')
}

exports.formulario = (req, res) => {
    res.send('formulario enviado!')
}