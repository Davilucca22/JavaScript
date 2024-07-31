const pessoa = {
    nome:'davi',
    sobrenome:'lucas',
    idade:19
}


//a chave pega o valor do elemento do objeto pelo nome dele
for(let chave in pessoa){
    console.log(pessoa[chave])
}
