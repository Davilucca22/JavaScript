let tarefa = document.querySelector('#tarefa')
let lista = document.querySelector('#Lista')

const BotaoaddTarefa = document.querySelector('#botao')

function limpaTarefa(){
    tarefa.value = ''
    tarefa.focus()
}

function addtarefa(tarefa){
    if (!tarefa.value){
        alert('Digite alguma tarefa para adicionar a Lista')
    }else{
        let item = document.createElement('li')
        const apaga = document.createElement('button')
        apaga.innerText = 'Excluir' 
        item.innerHTML = tarefa.value
        item.appendChild(apaga)
        lista.appendChild(item)
        limpaTarefa()

        apaga.addEventListener('click',function(){
            item.remove() 
        })
    }
}


tarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        addtarefa(tarefa)
    }
})

BotaoaddTarefa.addEventListener('click',function(){
    addtarefa(tarefa)
})
