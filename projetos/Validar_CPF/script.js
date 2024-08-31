//falta comparar o clone do array com o array original

function validaCPF(){
    let enter = document.querySelector('button')
    enter.addEventListener('click',() => {
        let cpf = document.querySelector('#CPF').value
        cpf = '705.484.450-52'
        let cpfLimpo = cpf.replace(/\D/g,'') //cpf sem os pontos e traço
        let cpfSemDigitos = cpfLimpo.slice(0,-2) //tira os dois ultimos digitos
        let cpfpronto = Array.from(cpfSemDigitos) //transforma o cpf em um array
        let n = cpfpronto.length + 1 //contador para fazer a multiplicaçao dos digitos
        //funçao que percorre todos os valores do array e multiplica pelo contador
        let num = cpfpronto.reduce(function (cont,valor){
            let conta = cont += Number(valor) * n
            n--
            return conta
        },0)


        let primDigito = 11 - (num % 11) //encontra o primeiro digito
        if(primDigito > 9){
            primDigito = 0
        }

        let cloneArray = [...cpfpronto]
        cloneArray.push(primDigito)

        let n2 = cloneArray.length + 1
        let num2 = cloneArray.reduce(function(cont,valor) {
            let conta = cont += Number(valor) * n2
            n2--
            return conta
        },0)

        let segunDigito = 11 - (num2 % 11)
       
        cloneArray.push(segunDigito)

        console.log(cloneArray)
        console.log(cpfLimpo)
    })

}

validaCPF()