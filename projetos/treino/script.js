function Criatreino(){

    //evento que captura o clique do botao add treino
    const btnTreino = document.querySelector('#criaTreino')
    btnTreino.addEventListener('click',() => {
        planoDeTreino()
    })

    //funçao que cria a "pasta" do treino
    function planoDeTreino(){
        const pai = document.querySelector('.conteudo')
        const del = document.createElement('button')
        const section = document.createElement('section')
        const text = document.createElement('p')
        del.className = 'delete'
        del.innerText = 'X'
        text.innerText = 'Treino A'
        section.appendChild(del)
        section.appendChild(text)
        pai.appendChild(section)
    }

    //funçao para deletar algum treino
    function del(){
        const del = document.querySelector('.delete')
        del.remove()
    }

    //chamada da funçao de deletar treino
    const btnDelete = document.querySelector('.delete')
    btnDelete.addEventListener('click',() => del() )
}

Criatreino()