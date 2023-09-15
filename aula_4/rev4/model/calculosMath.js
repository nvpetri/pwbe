function calculadora(valoR1, valoR2, opeRacao){
    let valor1 = valoR1
    let valor2 = valoR2
    let operacao = opeRacao

    let resultado

    switch(operacao){
        case "subtrair":
            resultado = valor1 - valor2
            break
        case "somar":
            resultado = valor1 + valor2
            break
        case "multiplicar":
            resultado = valor1 * valor2
            break
        case "dividir":
            if(valor1 == 0 || valor2 == 0) console.log('ERRO! Não foi possivel realizar essa divisão')
                else resultado = valor1/valor2
            break
        default:
                console.log('Algo não está funcionando corretamente \n Tente novamente mais tarde')
            break
    }
    if(resultado != undefined) return resultado
    else return false
}


module.exports = {
    calculadora   
}