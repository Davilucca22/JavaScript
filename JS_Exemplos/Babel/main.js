const nome = 'pau1'

const obj = {
    nome,
    idade: 15,
    sobrenome:'pinto'
}

const copy = {...obj}



//essa linha digitada no terminal criara um novo arquivo bundle.js que vai reescrever p codigo na sua versao antiga 
//npx babel main.js -o bundle.js --presets=@babel/env