function tabuada(){
    var num  = document.getElementById('numero')
    var list = document.getElementById('lista')

    if(num.value.length == 0){
        alert('Digite um numero!')
    }else{

        var numero = Number(num.value)

        list.innerHTML = ''

        for(var c = 0;c <= 10;c++){
            let result = numero * c
            let opt = document.createElement('option')
            opt.text = `${c} x ${numero} = ${result}`
            list.appendChild(opt)

        }
    }
}