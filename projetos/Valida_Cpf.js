function ValidaCpf(cpfenviado){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable:true,
        get: function(){
           return cpfenviado.replace(/\D+/g,'') 
        }
    })
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2

    return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    let contadorRegressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac,valor) => {
        ac += (Number(valor) * contadorRegressivo)
        contadorRegressivo-- 
        return  ac
    },0)

    const digito =  11- (total % 11)
    //expressao ternaria(se digito maior que 9 retorna 0,senao retorna o digito)
    return digito > 9 ? '0' : String(digito)

}

ValidaCpf.prototype.isSequencia = function (cpfParcial){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo

}

const cpf = new ValidaCpf('705.484.450-52')
console.log(cpf.valida())