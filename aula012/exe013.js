var horas = new Date()
var minutos = horas.getMinutes()
var hora = horas.getHours()
console.log(`agora sao exatamente ${hora}:${minutos}`)
if(hora < 12){
    console.log('bom dia')
}else if (hora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}