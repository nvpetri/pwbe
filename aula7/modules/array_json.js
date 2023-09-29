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

    // Adiciona elementos novos na primeira posição do array
    listaDeNomes.unshift('Ricardo')

    //console.table(listaDeNomes)

    // Remove o ultimo elemento do array
    listaDeNomes.pop()

    //Remove o primeiro elemento do array
    listaDeNomes.shift()

    //console.table(listaDeNomes)

    // Remove um item especifico, (indice, quantidade de itens a partir dele)
    listaDeNomes.splice(2, 1)

    //console.table(listaDeNomes)

    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true)

    console.table(listaDeNomes)

    console.log(typeof(listaDeNomes[9]))

}

const percorrerArray = function() {

    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'MousePad', 'Gabinete', 'Processador', 'HD']

    //While
    // let cont = 0
    // while (cont < listaDeProdutos.length) {
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
    //     cont++    
    // }

    // for (let cont = 0; cont < listaDeProdutos.length; cont++)
    //     console.log('Nome do Produto: ' + listaDeProdutos[cont])

    // listaDeProdutos.forEach(function(produto, indice) {
    //     console.log(indice + 1 + ' Nome do produto: ' + produto)
    // })

    //Retorna o indice do elemento que foi encontrado
    console.log(listaDeProdutos.indexOf('Impressora'))

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Impressora'))

    console.log(listaDeProdutos.includes('notebook'))
}

const filtroProdutos = (nomeProduto) => {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'MousePad', 'Gabinete', 'Processador', 'HD']
    let nome = String(nomeProduto)


    let status = false
        // return listaDeProdutos.includes(nome)

    // if (listaDeProdutos.indexOf(nome) >= 0)
    //     status = true
    // else
    //     status = false

    listaDeProdutos.forEach(function(produto) {
        if (produto.toUpperCase() == nome.toUpperCase()) {
            status = true
        }
    })
    return status

}

console.log(filtroProdutos('teclado'))

filtroProdutos()