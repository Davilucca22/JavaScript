const paragrafos = document.querySelector('.paragrafos')
const Ps = paragrafos.querySelectorAll('p')

const bodyStyle = getComputedStyle(document.body)
const bodyColor = bodyStyle.backgroundColor

for(let i of Ps){
    i.style.backgroundColor = bodyColor
    i.style.color = 'white'
}
