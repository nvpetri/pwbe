/***************************************************************
 * Objetivo: Elaborar um programa para auxiliar no processo    *
 * de vendas de uma loja, realizando o calculo dos valores.    *
 * Autor: Nicolas Vasconcelos                                  *
 * Data: 25/08/2023                                            *
 * Versão: 1.0                                                 *
 **************************************************************/

var readline = require('readline');
var calculos = require('./model/calculos.js');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o valor da venda: ', function(valorVenda) {
    entradaDeDados.question('Qual a condição da venda? (Digite "H" para ajuda): ', function(condicao) {
        resultado = calculos.calculadora(valorVenda, condicao);

        if (resultado !== false) console.log(resultado);
        else console.log('Algo não está funcionando corretamente \n Tente novamente mais tarde')

        entradaDeDados.close()
    })
})
    