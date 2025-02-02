//importando o padrao
import GeraCPF from './modules/GeraCPF'
//importando o css
import './assets/css/style.css'

function iniciar(){

    const cpf = new GeraCPF()
    const div = document.querySelector('#CPF')
    div.innerHTML = cpf.geranovoCpf()
    console.log(cpf.formataCPF())
}

window.onload = iniciar 