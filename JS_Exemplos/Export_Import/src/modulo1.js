const  nome =  'diogo'
const idade = 23
const sexo = 'masculino'

//nesse modelo,a variavel nome é exportada como padrao
export {nome as default}

//default é uma exportaçao padrao(só pode haver um default por arquivo)
/*export default function soma(x,y){
    return x + y
}*/


//essa é uma maneira de exportar
//export{nome,idade,sexo,soma}
