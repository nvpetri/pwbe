/************************************************
 *Objetivo: correção atividade da aula 4        *
 *Autor: Nicolas Vasconcelos                    *
 *Data: 18/08/2023                              *
 *Versão 1.0                                    *
*************************************************/
var readline = require('readline')

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

            if(valor1 == "" || valor2 == ""){
                console.log('Vixi!!! É obrigatória a entrada de dados!!!')
            }else if(isNaN(valor1) || isNaN(valor2)){
                console.log('Insira somente números!!')
            }else{
                let resultado
                if(operacao == "somar"){
                    resultado = Number(valor1)+Number(valor2)
                    console.log(resultado)
                }else if(operacao == "subtrair"){
                    resultado = Number(valor1)-Number(valor2)
                    console.log(resultado)
                }else if(operacao == "dividir"){
                    resultado = Number(valor1)/Number(valor2)
                    console.log(resultado)
                }else if(operacao == "multiplicar"){
                    resultado = Number(valor1)*Number(valor2)
                    console.log(resultado)
                }else{
                    console.log('Insira uma operação valida')
                }
            }

        })
    })
})