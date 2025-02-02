/*Crie um objeto literal livro com propriedades titulo, autor e um método resumir 
que exibe uma string "Título: [titulo], Autor: [autor]".
Adicione um método ao protótipo de livro que exibe "Este é um livro."*/ 

const livro = {
        titulo: 'ball cat',
        autor: 'thomaz Turbano',
        resumir:function(){
            console.log(`Titulo:${this.titulo} autor:${this.autor}`)
        }
}

livro.__proto__.infoGeral = function(){
    console.log('isso é um livro')
}

livro.resumir()
livro.infoGeral()