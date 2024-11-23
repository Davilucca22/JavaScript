//Transformar um array de objetos em um único objeto

const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "João" },
    { id: 3, nome: "Maria" }
];

const novoObj = usuarios.reduce((cont,valor) => {
    cont[valor.id] = valor.nome
    return cont
},{})

console.log(novoObj)
