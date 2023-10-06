/*****************************************************************
 * Autor: Nicolas Vasconcelos
 * Data: 06/10/2023
 * Versão: 1.1
 * Objetivo: Trabalhar com estrutura de dados em Array e JSON
 *****************************************************************/

// [ ] -> Representa a estrutura array
// { } -> Representa a estrutura json

// const introducaoArray = function() {

//     // criando um array de forma manual
//     let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo']

//     // exibe os dados do array
//     console.log(listaDeNomes)

//     //exibe os dados do array em forma de tabela
//     console.table(listaDeNomes)

//     // retorna a quantidade de elementos de um array

//     console.log(listaDeNomes.length)

//     // Adiciona elementos novos no final do array
//     listaDeNomes.push('Roberto')

//     // Adiciona elementos novos na primeira posição do array
//     listaDeNomes.unshift('Ricardo')

//     //console.table(listaDeNomes)

//     // Remove o ultimo elemento do array
//     listaDeNomes.pop()

//     //Remove o primeiro elemento do array
//     listaDeNomes.shift()

//     //console.table(listaDeNomes)

//     // Remove um item especifico, (indice, quantidade de itens a partir dele)
//     listaDeNomes.splice(2, 1)

//     //console.table(listaDeNomes)

//     listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva', 10, true)

//     console.table(listaDeNomes)

//     console.log(typeof(listaDeNomes[9]))

// }

// const percorrerArray = function() {

//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'MousePad', 'Gabinete', 'Processador', 'HD']

//     //While
//     // let cont = 0
//     // while (cont < listaDeProdutos.length) {
//     //     console.log('Nome do Produto: ' + listaDeProdutos[cont])
//     //     cont++    
//     // }

//     // for (let cont = 0; cont < listaDeProdutos.length; cont++)
//     //     console.log('Nome do Produto: ' + listaDeProdutos[cont])

//     // listaDeProdutos.forEach(function(produto, indice) {
//     //     console.log(indice + 1 + ' Nome do produto: ' + produto)
//     // })

//     //Retorna o indice do elemento que foi encontrado
//     console.log(listaDeProdutos.indexOf('Impressora'))

//     //Retorna verdadeiro ou falso
//     console.log(listaDeProdutos.includes('Impressora'))

//     console.log(listaDeProdutos.includes('notebook'))
// }

// const filtroProdutos = (nomeProduto) => {
//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'MousePad', 'Gabinete', 'Processador', 'HD']
//     let nome = String(nomeProduto)


//     let status = false
//         // return listaDeProdutos.includes(nome)

//     // if (listaDeProdutos.indexOf(nome) >= 0)
//     //     status = true
//     // else
//     //     status = false

//     listaDeProdutos.forEach(function(produto) {
//         if (produto.toUpperCase() == nome.toUpperCase()) {
//             status = true
//         }
//     })
//     return status

// }

// console.log(filtroProdutos('teclado'))

// const manipulandoArrayJson = () => {

//     let contato = {
//         nome: "josé da silva",
//         telefone: "277758788",
//         email: 'josé@gmail.com'
//     }

//     let contato2 = {
//         nome: "maria da silva",
//         telefone: "277758788",
//         email: 'maria@gmail.com'
//     }

//     contato.celular = '9898989898'

//     contato.dataNascimento = '2000/08/09'

//     contato.telefone = '254236546465'

//     contato2.celular = '4545454545'

//     let arrayContato = [
//         contato,
//         contato2,
//         contato3 = {
//             nome: 'nicolas',
//             telefone: '941221523',
//             email: 'nicolas@gmail.com'
//         }
//     ]

//     arrayContato.forEach((dadosContato) => {
//         console.log('Nome: ' + dadosContato.nome)
//         console.log('Telefone: ' + dadosContato.telefone)
//         console.log('Email: ' + dadosContato.email)
//         if (dadosContato.dataNascimento != undefined)
//             console.log('Data de nascimento: ' + dadosContato.dataNascimento)
//         if (dadosContato.celular != undefined)
//             console.log('Celular: ' + dadosContato.celular)
//         console.log('#################################\n')
//     })
// }

// manipulandoArrayJson()

const cadastrarProdutos = () => {
    let lista_marcas = [{
            id: 1,
            nome_marca: 'Dell'
        },
        {
            id: 2,
            nome_marca: 'Apple'
        },
        {
            id: 3,
            nome_marca: 'Lenovo'
        },
        {
            id: 4,
            nome_marca: 'Positivo'
        },
        {
            id: 5,
            nome_marca: 'Razer'
        },
        {
            id: 6,
            nome_marca: 'Logitech'
        },
        {
            id: 7,
            nome_marca: 'Multilaser'
        }
    ]
    let lista_categorias = [{
            id: 1,
            nome_categoria: 'Periférico',
            descricao_categoria: 'Periféricos para computador'
        },
        {
            id: 2,
            nome_categoria: 'Hardware',
            descricao_categoria: 'Hardware para montar computadores'
        },
        {
            id: 3,
            nome_categoria: 'Computador',
            descricao_categoria: 'Computadores Montados'
        },
        {
            id: 4,
            nome_categoria: 'Games',
            descricao_categoria: 'Jogos em geral'
        }
    ]
    let lista_situacao = [{
            id: 1,
            sitacao: 'Novo'
        },
        {
            id: 2,
            situacao: 'Seminovo'
        }
    ]
    let lista_cores = [{
            id: 1,
            cor: 'Branco'
        },
        {
            id: 2,
            cor: 'Preto'
        },
        {
            id: 3,
            cor: 'Vermelho'
        },
        {
            id: 4,
            cor: 'Cinza'
        },
        {
            id: 5,
            cor: 'Azul'
        }
    ]
    let produto1 = {
        nome_produto: 'Mouse',
        descricao: 'Mouse Optico com fio',
        qtde: 50,
        valor: 60.00,
        marca: lista_marcas[0],
        categoria: lista_categorias[0],
        situacao: lista_situacao[0],
        cor: [
            lista_cores[0],
            lista_cores[1],
            lista_cores[3]
        ]
    }
    let produto2 = {
        nome_produto: 'Teclado',
        descricao: 'Teclado Mecanico Switch Blue',
        qtde: 60,
        valor: 240.00,
        marca: lista_marcas[4],
        categoria: lista_categorias[0],
        situacao: lista_situacao[0],
        cor: lista_cores
    }

    let arrayProdutos = []

    arrayProdutos.push(produto1)
    arrayProdutos.push(produto2)
    let count = arrayProdutos.length

    let jsonprodutos = {
        arrayProdutos,
        count
    }

    console.log(jsonprodutos)
}

cadastrarProdutos()