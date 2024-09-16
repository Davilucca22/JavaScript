function produto(nome,preco,estoque) {
    this.nome = nome
    this.preco = preco

    //essa funçao omite a existencia da chave estoque
    Object.defineProperty(this,'estoque',{
        //enumerable conta o indice da chave no objeto
        enumerable:true,
        //value controla o valor da chave
        value:estoque,
        //trava o valor da chave(deixa a chave inalteravel)
        writable:false,
        //controla se a chave é configuravel ou nao
        configurable:true
    })

    //permite omitir varias chaves de uma vez
    Object.defineProperties(this,{
        nome:{
            value:'macarrao'
        },
        preco:{
            enumerable:false
        }
    })

}

const p1 = new produto('camisa',25,4)
console.log(p1)