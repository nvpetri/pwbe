/*********************************************************************************
 * Objetivo: Reaizar o cálculo de uma tabuada atravé de estruturas de repetição  *
 * Autor: Nicolas Vasconcelos                                                    *
 * Data: 15/09/2023                                                              *
 * Versão: 1.0                                                                   *
**********************************************************************************/

//Função para gerar uma tabuada
const gerarTabuada = function (valorTabuada, contadorInicial, contadorFinal) {

    //Entradas de dados que vieram pelos argumentos da função 
    let tabuada = valorTabuada
    let contInicial = contadorInicial
    let contFinal = contadorFinal

    let valorInicial = Number(contInicial)
    let valorFinal = Number(contFinal)

    let resultado
    let status = false

    //Validação para deixar os valores em ordem crescente
    if (valorFinal < valorInicial) {
        valorInicial = contadorFinal
        valorFinal = contadorInicial
    }

    //Validação de dados vazios ou de caracteres inválidos
    if (valorInicial == '' || valorFinal == '' || tabuada == '')
        console.log('ERRO: É obrigatório fornecer todos os valores')
    else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
        console.log('ERRO: É obrigatório a entrada somente de números.')
    else {

        //Convertenso String para Number
        // contInicial = Number(contInicial)
        // contFinal = Number(contFinal)
        // //Exemplo de While
        // while (contInicial <= contFinal) {
        //     resultado = tabuada * contInicial
        //     console.log(`${tabuada} x ${contInicial} = ${resultado}`)
        //     contInicial++

        //     status = true

        for (; valorInicial <= valorFinal; valorInicial++) {
            resultado = tabuada * valorInicial
            console.log(`${tabuada} x ${valorInicial} = ${resultado}`)
            status = true
        }
    }
    return status

}

module.exports = {
    gerarTabuada
}