function Calculadora(){
    this.display = document.querySelector('.display')

    this.Mostravalor = (valor) =>{
        this.display.value += valor
    }

    this.Limpadisplay = () =>{
        this.display.value = ''
    }

    this.Limpaum = () => {
        this.display.value = this.display.value.slice(0,-1) 
    }

    this.FazConta = () => {
        try{
            const conta = eval(this.display.value)

            if(!conta){
                alert('conta invalida')
            }else{
                this.display.value = conta
            }

        }catch(e){
            alert('conta invalida')
        }
    }

    this.Enter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.FazConta()
            }
        })
    }

    this.Capturaclick = () =>{
        document.addEventListener('click',e => {
            const element = e.target
            
            if(element.classList.contains('btn-num')){
                this.Mostravalor(element.innerText)
            }
            if(element.classList.contains('btn-clear')){
                this.Limpadisplay()
            }
            if(element.classList.contains('btn-del')){
                this.Limpaum()
            }
            if(element.classList.contains('btn-result')){
                this.FazConta()
            }

            this.display.focus()
        })
    }

    this.inicia = () => {
       this.Capturaclick()
       this.Enter()
    }

}

const func = new Calculadora()
func.inicia()