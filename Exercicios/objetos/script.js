function pai(){
    const botao = document.querySelector('#botao')
    const paragrafo = document.querySelector('#ficha')

    //funcao que cria um paragrafo,ela recebe um texto e um dado,e entao faz a concatenaçao entre eles(se nao forem informados,receberao o valor vazio)
    function criaP(texto1 = '',dado='',texto2 = ''){
        const p = document.createElement("p")
        paragrafo.appendChild(p)
        p.innerText = texto1 + dado + texto2
    }
    
    botao.addEventListener('click',() =>{
        let nome = document.querySelector('#nome').value
        let nascimento = document.querySelector('#dataNasc').value
        let altura = Number(document.querySelector('#altura').value)
        let peso = Number(document.querySelector('#peso').value)

        if(nome.length == ''|| nascimento.length == '' || altura.length == '' || peso.length == ''){
            alert('Preencha todos os campos!')
        }else{
            function Pessoa(nome,nascimento,altura,peso){
                this.nome = nome,
                this.sobrenome = () => {
                    let nomecompleto = this.nome.split(' ')
                    return nomecompleto[1]
                }
                this.nascimento = nascimento,
                this.altura = altura,
                this.peso = peso,

                this.imc = () =>  {
                    let IMC = this.peso / this.altura ** 2
                    let imc2 = IMC.toFixed(2)
                    if(IMC < 16){ 
                        return `seu IMC é de ${imc2},isso te coloca em extrema magreza`
                    }else if(IMC < 16.9){
                        return `seu IMC é de ${imc2},isso te coloca em magreza moderada`
                    }else if(IMC < 18.5){
                        return  `seu IMC é de ${imc2},isso te coloca em magreza leve`
                    }else if(IMC < 24.9){
                        return `seu IMC é de ${imc2},isso te coloca em peso ideal`
                    }else if(IMC < 29.9){
                        return `seu IMC é de ${imc2},isso te coloca em sobrepeso`
                    }else{
                        return `seu IMC é de ${imc2},isso te coloca em obesidade`
                    }
                },

                this.idade = (nascimento) => {
                    const data = new Date
                    const anoAtual = data.getFullYear()
                    const array = this.nascimento.split('-')
                    if(Number(array[0]) > anoAtual){
                        return 0
                    }else{
                        let idade = anoAtual - Number(array[0])
                        return idade
                    }
                }
            }
            const p1 = new Pessoa(nome,nascimento,altura,peso)
            criaP('Suas Informaçoes:')
            criaP('seu sobrenome é ',p1.sobrenome())
            criaP(p1.imc())
            criaP('sua idade é de ',p1.idade(),' anos')
        }
        
    })
}

pai()