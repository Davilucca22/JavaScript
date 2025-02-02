
let texto = document.querySelector('#texto')

const data = new Date()
const dSemana = data.getDay()
const dMes = data.getDate()
const mes = data.getMonth() + 1
const ano = data.getFullYear()
const hora = data.getHours()
const min = data.getMinutes()

let diasemana = '';
let Mes = '';


switch (dSemana){
case 0:
    diasemana = 'Domingo'
    break
case 1:
    diasemana = 'Segunda-feira'
    break
case 2:
    diasemana = 'Terça-feira'
    break
case 3:
    diasemana = 'Quarta-feira'
    break
case 4:
    diasemana =  'Quinta-feira'
    break
case 5:
    diasemana = 'Sexta-feira'
    break
case 6:
    diasemana = 'Sabado'
    break
}

switch(mes){
case 1:
    Mes = 'Janeiro'
    break
case 2:
    Mes = 'Fevereiro'
    break
case 3:
    Mes = 'Março'
    break
case 4:
    Mes = 'Abril'
    break
case 5:
    Mes = 'Maio'
    break
case 6:
    Mes = 'Junho'
    break
case 7:
    Mes = 'Julho'
    break
case 8:
    Mes = 'Agosto'
    break
case 9:
    Mes = 'Setembro'
    break
case 10:
    Mes = 'Outubro'
    break
case 11:
    Mes = 'Novembro'
    break
case 12:
    Mes = 'Dezembro'
    break
}


texto.innerHTML = `${diasemana},${dMes} de ${Mes} de ${ano} ás ${hora}:${min}`
