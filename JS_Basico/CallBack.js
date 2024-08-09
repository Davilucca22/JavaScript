
//gera numeros aleatórios entre 1000 e 4000
function temp(min = 1000, max = 4000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

//a criaçao de um tempo em milissegundos aleatório representa uma simulaçao de tempo de resposta de um servidor.
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback()
    },temp())
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    },temp())
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    },temp())
}

//callback em açao
//a estrutura abaixo faz com que uma funçao só seja executada quando outra terminar,no caso f2 executa após f1,f3 após f2 e ola,mundo após f3.
f1(function(){
    f2(function(){
        f3(function(){
            console.log('ola,mundo')
        })
    })
})
