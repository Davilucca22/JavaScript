function calculadora(){
    return {
        display:document.querySelector('.display'),

        inicia(){
           this.cliquebotoes()
           this.enter()
        },

        enter(){
            this.display.addEventListener('keyup',e =>{
                if(e.keyCode == 13){
                    this.fazerconta()
                }
            })
        },

        cliquebotoes(){
            document.addEventListener('click', e =>{
                const conta = e.target;
                
                if(conta.classList.contains('btn-num')){
                    this.mostravalor(conta.innerText)
                }

                if(conta.classList.contains('btn-result')){
                    this.fazerconta()
                }

                if(conta.classList.contains('btn-clear')){
                    this.limparDisplay()
                }

                if(conta.classList.contains('btn-del')){
                    this.limpaUm()
                }

                this.display.focus()
            })
        },

        mostravalor(valor){
            this.display.value += valor
        },

        fazerconta(){
            let expressao = this.display.value
            
            try{
                expressao = eval(expressao)
                
                if(!expressao){
                    return alert('conta invalida')
                }
                
                this.display.value = String(expressao)
            }catch(er){
                alert('conta invalida')
            }

        },

        limparDisplay(){
            this.display.value = ''
        },

        limpaUm(){
            this.display.value = this.display.value.slice(0,-1)
        }

    }
     
}

const calc = calculadora()
calc.inicia()