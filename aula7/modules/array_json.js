/*****************************************************************
 * Autor: Nicolas Vasconcelos
 * Data: 29/09/2023
 * Versão: 1.0
 * Objetivo: Trabalhar com estrutura de dados em Array e JSON
 *****************************************************************/

// [ ] -> Representa a estrutura array
// { } -> Representa a estrutura json

const introducaoArray = function() {

    // criando um array de forma manual
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

    // exibe os dados do array
    console.log(listaDeNomes)

    //exibe os dados do array em forma de tabela
    console.table(listaDeNomes)

    // retorna a quantidade de elementos de um array

    console.log(listaDeNomes.length)

    // Adiciona elementos novos no final do array
    listaDeNomes.push('Roberto')

    console.table(listaDeNomes)

}

introducaoArray()