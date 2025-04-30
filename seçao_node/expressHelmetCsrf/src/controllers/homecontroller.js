//exportando funçoes para as rotas 

exports.paginaInicial = (req, res) => {
    res.render('index',{
        titulo:'<span>salveeee</span>',
        numeros:[0,1,2,3,4,5]
    })
}

exports.formulario = (req, res) => {
    res.send('formulario enviado!')
}