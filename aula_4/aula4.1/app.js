/************************************************************************
 * Objetivo: Fazer uma calculadora utilizando JavaScript                *
 * Autor: Nicolas Vasconcelos Petri Santos                              *
 * Data: 11/08/23                                                       *
 * Versão 1.10                                                          *
 ************************************************************************/

const readline = require ('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Informe o primeiro número: ', function(numero1){

    let n1 = numero1.replace(",", ".")

    entradaDados.question('Informe a operação (+) (-) (x) (/): ', function(resposta){
 
        let operacao = resposta

        entradaDados.question('Informe o segundo número: ', function(numero2){

            let n2 = numero2.replace(",", ".")

            if(operacao == '' || n1 == '' || n2 == ''){

                console.log('ERRO: É necessário informar os números e a operação')

            }else if(isNaN(n1) || isNaN(n2)){

                console.log('ERRO: É necessário informar números')

            }else if(operacao == '+'){

                let resultado = Number(n1) + Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == '-'){

                resultado = Number(n1) - Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == 'x'){

                resultado = Number(n1) * Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao == '/'){

                resultado = Number(n1) / Number(n2)
                console.log(`${n1} ${operacao} ${n2} = ${resultado}`)

            }else if (operacao != '+' || operacao != '-' || operacao != 'x' || operacao != '/'){

                console.log('ERRO: É necessário informar uma operação')

            }
        
            entradaDados.close()

        })

    })

})