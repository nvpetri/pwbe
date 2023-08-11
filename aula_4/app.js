/************************************************************************
 * Objetivo: Utilizar os fundamentos de programação para integrar na    *
 * aplicação das médias uns sistema que informe o status do aluno e     *
 * mostre a média com cores remetendo ao status,                        *
 * Autor: Nicolas Vasconcelos Petri Santos                              *
 * Data: 11/08/23                                                       *
 * Versão 1.1                                                           *
 ************************************************************************/

const readline = require('readline')
const colors = require('colors')

const entradaDeDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario

    entradaDeDados.question('Digite sua primeira nota: ', function(primeiraNota){
        let nota1 = primeiraNota
        let nota1cv = parseFloat(nota1)

        entradaDeDados.question('Digite sua segunda nota: ', function(segundaNota){
            let nota2 = segundaNota
            let nota2cv = parseFloat(nota2)

            entradaDeDados.question('Digite sua terceira nota: ', function(terceiraNota){
                let nota3 = terceiraNota
                let nota3cv = parseFloat(nota3)

                entradaDeDados.question("Digite sua quarta nota: ", function(quartaNota){
                    let nota4 = quartaNota
                    let nota4cv = parseFloat(nota4)

                    if(nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){

                        console.log('ERRO: Você esqueceu de alguma nota'.red)
                       
                    }else if(isNaN(nota1)||isNaN(nota2)||isNaN(nota3)||isNaN(nota4)){
                        console.log('ERRO: É obrigatório a entrada apenas de NÚMEROS!!'.red)
                    }else if(nota1>10 || nota2>10 || nota3>10 ||nota4>10){
                        console.log('ERRO: São permitidos apenas caractéres entre 0 e 10'.red)
                    }
                    else{
                        media = (nota1cv + nota2cv + nota3cv + nota4cv) / 4 

                        if(media >= 7){
                            console.log(`Olá  ${nome} sua média é ${media}. Parabéns, você foi aprovado(a)!!!`.blue)
                        }else{
                             console.log(`Olá  ${nome} sua média é ${media}. Infelizmente, você foi reprovado(a)!`.red)
                        }               
                    }

                    entradaDeDados.close()
                })
            })
        })
    })
})