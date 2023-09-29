function calcularTabuada(numero, contadorInicial, contadorFinal) {
    console.log(`Tabuada do [${numero}]`) //nicolas vasconcelos

    for (let n = contadorInicial; n <= contadorFinal; n++) {
        console.log(`${numero} x ${n} = ${numero * n}`)
    }
}
//nicolas vasconcelos
module.exports = {
    calcularTabuada
}