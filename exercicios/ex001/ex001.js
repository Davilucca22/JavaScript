var data = new Date()
var hora = data.getHours()
var msg = document.getElementById('mensagem')
var manha = document.getElementById('manha')
var tarde = document.getElementById('tarde')
var noite = document.getElementById('noite')
msg.innerHTML = `<p>agora sao ${hora} horas</p>`
if(hora > 12){
    manha.style.visibility = 'visible'
}else if(hora < 18){
    tarde.style.visibility = 'visible'
}else{
    noite.style.visibility = 'visible'
}

