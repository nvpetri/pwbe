/************************************************************************************************** 
 * Objetivo: manipular a entrada de dados via teclado no terminal
 * Autor: Nicolas Vasconcelos & Marcel
 * Data : 04/08/23
 * Versão: 1.0
 * ***********************************************************************************************/

// Import da biblioteca readline que recebe dados digitados pelo usuario no terminal

const { log } = require('console')
var readline = require('readline')

// Cria um elemento para entrada de dados do usuario via teclado

var entradaDeDados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

//Solicita a entrada de dados no terminal, atraves de uma função de CallBack do metodo question

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    
    //Recebe na variavel nome o conteudo digitado pelo usuario
    
    var nome = nomeUsuario

    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario

        entradaDeDados.question('Digite seu emai: ', function(emailUsuario){
            var mail = emailUsuario

            entradaDeDados.question('Digite seu telefone: ', function(telUsuario){
                var tel = telUsuario

                 //Exibe na tela um texto e a variavel
                console.log(`Bem vindo ao aplicativo,  ${nome}`)
                console.log(`Sua idade é:  ${idade}`)
                console.log(`Seu email é:  ${mail}`)
                console.log(`Seu telefone é: ${tel}`)

                //Encerrar a entrada de dados pelo usuario
                entradaDeDados.close()

            })
        })
    })
})
