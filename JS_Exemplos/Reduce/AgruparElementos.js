//Agrupar elementos por categoria

const produtos = [
    { nome: "Arroz", categoria: "Alimento" },
    { nome: "Camisa", categoria: "Vestuário" },
    { nome: "Feijão", categoria: "Alimento" },
    { nome: "Calça", categoria: "Vestuário" }
];

const agrupamento = produtos.reduce((cont,valor) => {
    if(!cont[valor.categoria]){
        cont[valor.categoria] = []
    }
    cont[valor.categoria].push(valor.nome)
    return cont
},{})

console.log(agrupamento) 