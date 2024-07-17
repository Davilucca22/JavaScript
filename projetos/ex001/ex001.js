function carregar(){
var agora = new Date()
var hora = agora.getHours()

var mensagem = window.document.getElementById('mensagem')
mensagem.innerHTML += `<p>agora são ${hora} horas</p>`

var manha = window.document.getElementById('prime')
var tarde = window.document.getElementById('segun')
var noite = window.document.getElementById('terce')

if(hora < 12){
    manha.style.visibility = 'visible'
    document.body.style.backgroundColor = '#b8c2b9'
}else if(hora < 18){
    tarde.style.visibility = 'visible'
    document.body.style.backgroundColor = '#bce5fb'
}else{
    noite.style.visibility = 'visible'
    document.body.style.backgroundColor = '#456a87'
}
}