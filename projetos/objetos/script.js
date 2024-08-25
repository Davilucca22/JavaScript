function pai(){
    const botao = document.querySelector('#botao')
    
    botao.addEventListener('click',() =>{
        let nome = document.querySelector('#nome').value
        let nascimento = document.querySelector('#dataNasc').value
        let altura = Number(document.querySelector('#altura').value)
        let peso = Number(document.querySelector('#peso').value)
    
        function Pessoa(nome,nascimento,altura,peso){
            this.nome = nome,
            this.nascimento = nascimento,
            this.altura = altura,
            this.peso = peso,

            this.imc = function()  {
                let IMC = this.peso / this.altura ** 2
                return IMC.toFixed(2)
            } 
        }
        const p1 = new Pessoa(nome,nascimento,altura,peso)
        console.log(p1.imc())
        
    })
}

pai()