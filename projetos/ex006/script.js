const lista = []
function cadastro(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let altura = Number(document.querySelector('#altura').value)
    let peso = Number(document.querySelector('#peso').value)

    document.body.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`

    function obj(nome,sobrenome,altura,peso){
        return pessoa = {nome,sobrenome,altura,peso}
    }

    let cad = obj(nome,sobrenome,peso,altura)
    lista.push(cad)

    console.log(lista)
}
