/*03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3 Vai aparecer: 3,2,1 */

function numb(){
    var num1 = Number(document.querySelector('#n1').value)
    var num2 = Number(document.querySelector('#n2').value)
    var num3 = Number(document.querySelector('#n3').value)
    var result = document.querySelector('#saida')

    let vetor = [num1,num2,num3]

    result.innerHTML += `ordem inversa da sequencia digitada:`

    for(let pos = vetor.length;pos >= 0;pos--){
        result.innerHTML += `${vetor[pos]},`
    }

    console.log(vetor)
}