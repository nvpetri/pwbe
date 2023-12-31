/******************************************************************
 * Objetivo: Obter uma media manipulando a entrada de dados via 
 * teclado no terminal, realizar calculos, conversão dos dados e 
 * mostrar na tela
 * Autor: Nicolas Vasconcelos
 * Data : 04/08/23
 * Versão: 1.0
 *****************************************************************/

// Import da biblioteca readline que recebe dados digitados pelo usuario no terminal

var readline = require('readline')

// Criando um elemento para entrada de dados do usuario via teclado

var entradaDeDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario

    entradaDeDados.question('Digite sua primeira nota: ', function(primeiraNota){
        let nota1 = primeiraNota
        var nota1cv = parseFloat(nota1)

        entradaDeDados.question('Digite sua segunda nota: ', function(segundaNota){
            let nota2 = segundaNota
            var nota2cv = parseFloat(nota2)

            entradaDeDados.question('Digite sua terceira nota: ', function(terceiraNota){
                let nota3 = terceiraNota
                var nota3cv = parseFloat(nota3)

                entradaDeDados.question("Digite sua quarta nota: ", function(quartaNota){
                    let nota4 = quartaNota
                    var nota4cv = parseFloat(nota4)

                    if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){

                        console.log('Você esqueceu de alguma nota')
                       
                    }else{
                        media = (nota1cv + nota2cv + nota3cv + nota4cv) / 4 

                        console.log(`Olá  ${nome} sua média é ${media}`)
                        
                    }

                    entradaDeDados.close()
                })
            })
        })
    })
})