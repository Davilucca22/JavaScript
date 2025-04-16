import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './assets/css/style.css'

const input = document.querySelector('#texto')
const btn = document.querySelector('#btn').addEventListener('click',() => {
    alert(input.value)
})