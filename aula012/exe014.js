var diasem = new Date()
var dia = diasem.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/

switch(dia){
    case 0 :
        console.log('hoje é domingo')
        break
    case 1:
        console.log('hoje é segunda-feira')
        break
    case 2:
        console.log('hoje é terça-feira')
        break
    case 3:
        console.log('hoje é quarta-feira')
        break
    case 4:
        console.log('hoje é quinta-feira')
        break
    case 5:
        console.log('hoje é sexta-feira')
        break
    case 6:
        console.log('hoje é sabado')
}
