let tarefa = document.querySelector('#tarefa')
let lista = document.querySelector('#Lista')

function limpaTarefa(){
    tarefa.value = ''
    tarefa.focus()
}

function addtarefa(tarefa){
    if (!tarefa.value){
        alert('Digite alguma tarefa para adicionar a Lista')
    }else{
        const apaga = document.createElement('button')
       let item = document.createElement('li')
        apaga.innerText = 'X' 
        item.innerHTML = tarefa.value
        lista.appendChild(item)
        item.appendChild(apaga)
        limpaTarefa()

        apaga.addEventListener('click',function(){
            item.remove() 
        }) 
    }
}

//captura o enter
tarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        addtarefa(tarefa)
    }
})
