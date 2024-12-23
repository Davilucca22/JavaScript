function iniciar(){
    document.addEventListener('click',e => {
        const alvo = e.target
        console.log(alvo)
    })
}

window.onload = iniciar 