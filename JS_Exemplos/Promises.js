
//Promises sao como promessas que esperam um retorno
//ela recebe dois parametros resolve(soluçao) e reject(erro) 
const promessa = new Promise((resolve,reject) => {

    const nome = 'Davi'

    if(nome === 'Davi'){
        resolve('Davi encontrado')
    }else{
        reject('Davi nao encontrado')
    }
})

//para instanciar(retornar) o resultado da promise,deve-se utilizar o then
//no caso de sucesso,e o catch no caso de erro
promessa.then((retorno) => { //o parametro passado("retorno") é o resultado da promise
    console.log('lowerCase:' + retorno)
    return retorno.toUpperCase() //para encadear varios then,deve-se dar um retorno para o proximo poder tratar
})
.then((retorno) => {
    console.log('then2 ' + retorno)
})
.catch((erro) => { //essa linha só é executada quando houver um erro
    console.log(erro)
})


//promise.all faz com que varias promises sejam tratadas de uma só vez

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('p1 ok')
       },2000)
})

const p2 = new Promise((resolve,reject) => {
    resolve('p2 ok')
})

const p3 = new Promise((resolve,reject) => {
    resolve('p3 ok')
})

const promises = [p1,p2,p3]

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(valor => {
    console.log(valor)
})

//promise.race retorna a primeira promise resolvida

//p4 nunca vai ganhar pois só sera resolvida depois de 2 segundos
const p4 = new Promise((resolve,reject) => {
   setTimeout(() => {
    resolve('p4 ok')
   },2000)
})

//p5 e p6 sao resolvidas ao mesmo tempo,porem p5 ganha pq ela vem primeiro no array
const p5 = new Promise((resolve,reject) => {
    resolve('p5 ok')
})

const p6 = new Promise((resolve,reject) => {
    resolve('p6 ok')
})

const promises2 = [p4,p5,p6]


Promise.race(promises2)
.then(valor => {
    console.log(valor)
})
.catch(valor => {
    console.log(valor)
})
