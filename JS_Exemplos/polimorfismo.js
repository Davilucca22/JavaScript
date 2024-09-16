/*O Polimorfismo é um mecanismo por meio do qual selecionamos as funcionalidades
utilizadas de forma dinâmica por um programa no decorrer de sua execução.
Com o Polimorfismo, os mesmos atributos e objetos podem ser utilizados em objetos distintos, 
porém, com implementações lógicas diferentes.
Por exemplo: podemos assumir que uma bola de futebol e uma camisa da seleção brasileira são artigos esportivos,
mais que o cálculo deles em uma venda é calculado de formas diferentes.
*/
function Conta(agencia,conta,saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if(this.saldo < valor) {
        console.log('saldo insuficiente')
        this.verSaldo()
        return
    }

    this.saldo -= valor
}

Conta.prototype.depositar = function (valor) {
    this.saldo  += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c:${this.agencia}/${this.conta} | saldo:R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if(valor > this.saldo + this.limite) {
        console.log('saldo insuficiente')
        this.verSaldo()
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

function Poupança(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo)
}

Poupança.prototype = Object.create(Conta.prototype)
Poupança.prototype.constructor = Poupança


const cc = new ContaCorrente(11,11,0,100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)

console.log('------------------------------------------------------')

const cp = new Poupança(12,33,0)
cp.depositar(10)
cp.sacar(10)
cp.sacar(1)