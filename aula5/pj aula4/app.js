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

            valor1 = Number(valor1)
            valor2 = Number(valor2)

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
                    if(valor1 == 0 || valor2 == 0)
                        console.log('ERRO! Não foi possivel realizar essa divisão')
                        else
                            resultado = valor1/valor2
                    break
                default:
                    break
            }

            /*if(valor1 == "" || valor2 == "")
                console.log('Vixi!!! É obrigatória a entrada de dados!!!')
            else if(isNaN(valor1) || isNaN(valor2))
                console.log('Insira somente números!!')
            else{
                let resultado
                valor1 = Number(valor1)
                valor2 = Number(valor2)
                if(operacao == "somar")
                    resultado = valor1+valor2
                else if(operacao == "subtrair")
                    resultado = valor1-valor2
                else if(operacao == "dividir"){
                    if(valor1 == 0 || valor2 == 0)
                        console.log('ERRO! Não foi possivel realizar essa divisão')
                        else
                            resultado = valor1/valor2   
                    }else if(operacao == "multiplicar")
                    resultado = valor1*valor2
                else
                    console.log('Insira uma operação valida')*/
                if (resultado != undefined)
                    console.log(resultado.toFixed(2).replace('.',','))
                    else
                    console.log('Algo não está funcionando corretamente \n Tente novamente mais tarde')
            
         })
    })
})

function calculadora(){
    
}