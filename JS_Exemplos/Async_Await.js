function espera(msg){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Errei fui muleke')
                return
            }
            resolve(msg)
            return
        },2000)
    })
}

//isso faz a mesma coisa    
espera('lucca')
.then((dado) => {
    return dado.toUpperCase()
})
.then((dado) => {
    console.log(dado)
})
.catch((erro) => {
    console.log(erro)
})

//que isso
async function executa() {
    try{
        const p1 = await espera(3)
        const p2 = p1.toUpperCase()
        console.log(p2)
    }catch(erro){
        console.log(erro)
    }
}

executa()
