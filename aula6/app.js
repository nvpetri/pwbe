var calculoTabuada = require('./module/calcularTabuada.js')
var readline = require('readline')

var teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

teclado.question('Digite uma tabuada: ', function (valorTabuada) {
    let tabuada = valorTabuada

    teclado.question('Digite o valor do contador inicial: ', function(valorContadorInicial){
        let contadorInicial = valorContadorInicial

        teclado.question('Digite o valor do contador final: ', function(valorContadorFinal){
            let contadorFinal = valorContadorFinal

            calculoTabuada.gerarTabuada(tabuada, contadorInicial, contadorFinal)
        })
    })
})