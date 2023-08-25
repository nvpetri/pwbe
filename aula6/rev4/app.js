/************************************************
 *Objetivo: Modificações atividade da aula 4    *
 *Autor: Nicolas Vasconcelos                    *
 *Data: 25/08/2023                              *
 *Versão 1.2                                    *
*************************************************/
var readline = require('readline')

var calculosMath = require('./model/calculosMath.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

// Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro valor: ', function(numero1){
    let valor1 = numero1.replace(',','.')

    // Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo valor: ', function(numero2){
        let valor2 = numero2.replace(',','.')

        // Entrada de dados referente a operação que será realizada
        entradaDeDados.question('Escolha uma operação a ser realizada: [somar - subtrair - multiplicar - dividir] ', function(opcaoMath){
            let operacao = opcaoMath.toLowerCase()
            let resultado
            valor1 = Number(valor1)
            valor2 = Number(valor2)

            resultado = calculosMath.calculadora(valor1, valor2, operacao)

            if (resultado)
                console.log(resultado.toFixed(2).replace('.',','))
            else
                console.log('Algo não está funcionando corretamente \n Tente novamente mais tarde')
         })
    })
})
