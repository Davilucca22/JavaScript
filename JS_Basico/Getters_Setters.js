function produto(nome,preco,estoque) {
    this.nome = nome
    this.preco = preco


    let estoque2 = estoque
    //essa funçao omite a existencia da chave estoque
    Object.defineProperty(this,'estoque',{
        //enumerable conta o indice da chave no objeto
        enumerable:true,
        configurable:true,

        //apenas retorna o valor
        get: () =>{
            return estoque2
        },
        //"protege" o valor da chave
        set:(valor) =>{
            if(typeof valor != 'number'){
                console.log('ERROR!!')
            }
            estoque2 = valor
        }
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
p1.estoque = 23
console.log(p1.estoque)