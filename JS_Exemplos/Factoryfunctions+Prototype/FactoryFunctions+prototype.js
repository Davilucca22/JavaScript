const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`)
    }
}

//apenas  as funçoes escolhidas sao acopladas ao prototype dos objetos
const PessoaPrototype = {...falar}

function CriaPessoa(nome,sobrenome){
    //prototype acoplado diretamente ao objeto
    /*const PessoaPrototype = {
        falar() {
            console.log(`${this.nome} esta falando`)
        },

        comer() {
            console.log(`${this.nome} esta comendo`)
        }
    }*/

    return Object.create(PessoaPrototype,{
        nome:{ value: nome},
        sobrenome:{value:sobrenome}
    })
}

const p1 = CriaPessoa('davi','lucas')
console.log(p1)

const p2 = CriaPessoa('deydi','costa')
console.log(p2)