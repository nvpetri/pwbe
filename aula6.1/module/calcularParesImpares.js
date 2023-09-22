function validarEntradas(numeroInicial, numeroFinal){
    if (numeroInicial < 0 || numeroInicial > 500 || numeroFinal < 100 || numeroFinal > 1000)
        return false
    if (numeroInicial >= numeroFinal)
        return false

    return true
}

function obterSequenciaPares (numeroInicial, numeroFinal){
    const sequenciaPares = []
    for (let i = numeroInicial; i <= numeroFinal; i++)
        if(i % 2 ===0)
            sequenciaPares.push(i)

    return sequenciaPares
}

function obterSequenciaImpares (numeroInicial, numeroFinal){
    const sequenciaImpares = []
    for (let i = numeroInicial; i <= numeroFinal; i++)
        if (i % 2 !== 0)
            sequenciaImpares.push(i)

    return sequenciaImpares
}

function calcularParesImpares(){
    teclado.question('Digite o numero inicial: ', (numeroInicial) => {
        teclado.question('Digite o numero final: ', (numeroFinal) => {
            const numeroInicialValido = parseInt(numeroInicial)
            const numeroFinalValido = parseInt(numeroFinal)

            if(isNaN(numeroInicialValido) || isNaN(numeroFinalValido || numeroInicial.trim() === '' || numeroFinal.trim() === '')){
                console.log('Entrada invalida. Certifique-se de que ambos os valores foram inseridos corretamente')
                calcularParesImpares()
            }
            if (!validarEntradas(numeroInicialValido, numeroFinalValido)){
                console.log('Entrada invalida. Verifique se os valores estão dentro do limite permitido')
                calcularParesImpares
            }
            const sequenciaPares = obterSequenciaPares(numeroInicialValido, numeroFinalValido);
            const sequenciaImpares = obterSequenciaImpares(numeroInicialValido, numeroFinalValido);

            teclado.question('Escolha uma opção:\n1. Calcular apenas os números pares\n2. Calcular apenas os números ímpares\n3. Calcular ambos (Pares e Ímpares)\n', (opcao) => {
                switch (opcao) {
                    case '1':
                        console.log('Lista de números Pares')
                        sequenciaPares.forEach((numero) => {
                            console.log(numero)
                        })
                        console.log(`Qtde de números encontrados: ${sequenciaPares.length}`)
                        break
                    case '2':
                        console.log('Lista de números Ímpares')
                        sequenciaImpares.forEach((numero) => {
                            console.log(numero)
                        })
                        console.log(`Qtde de números encontrados: ${sequenciaImpares.length}`)
                        break
                    case '3':
                        console.log('Lista de números Pares')
                        sequenciaPares.forEach((numero) => {
                            console.log(numero)
                        })
                        console.log(`Qtde de números encontrados: ${sequenciaPares.length}`)
                        console.log('Lista de números Ímpares')
                        sequenciaImpares.forEach((numero) => {
                            console.log(numero)
                        })
                        console.log(`Qtde de números encontrados: ${sequenciaImpares.length}`)
                        break
                    default:
                        console.log('Opção inválida. Tente novamente.')
                        break
                }
            })
        })
    })
}

module.exports = {
    calcularParesImpares
}