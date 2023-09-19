const readline = require('readline')

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularTabuada(numero, contadorInicial, contadorFinal) {
    console.log(`Tabuada do [${numero}]`)
    
    for (let n = contadorInicial; n <= contadorFinal; n++) {
        console.log(`${numero} x ${n} = ${numero * n}`)
    }
}

function solicitarEntrada() {
    teclado.question('Digite o número da tabuada: ', (numero) => {
        teclado.question('Digite o contador inicial: ', (contadorInicial) => {
            teclado.question('Digite o contador final: ', (contadorFinal) => {
                if (
                    numero >= 2 && numero <= 100 &&
                    contadorInicial >= 0 && contadorInicial <= 50 &&
                    contadorFinal >= 0 && contadorFinal <= 50
                ) {
                    calcularTabuada(parseInt(numero), parseInt(contadorInicial), parseInt(contadorFinal))
                } else {
                    console.log('Entradas inválidas. Certifique-se de que os valores estejam dentro dos limites permitidos.')
                }
                teclado.close()
            })
        })
    })
}

module.exports = {
    calcularTabuada,
    solicitarEntrada
}