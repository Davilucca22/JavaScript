const pessoas = [
    {nome:'caio',idade:24},
    {nome:'joao',idade:14},
    {nome:'maria',idade:32},
    {nome:'joana',idade:15},
    {nome:'mateus',idade:18},
    {nome:'sabrina',idade:20},
    {nome:'lucas',idade:78},
    {nome:'rebeca',idade:23},
    {nome:'isa',idade:11}
]


//filtra os usuarios maiores de  idade
const Dmaior = pessoas.filter(valor => valor.idade >= 18)
console.log(Dmaior)