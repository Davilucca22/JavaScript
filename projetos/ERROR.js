function soma(a,b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('valores nao numericos')
    }
    return a + b
}

try{
    console.log(soma(1,3))
    console.log(soma('1',3))
}catch(err){
    console.log(err)
    console.log('deu merda')

}
