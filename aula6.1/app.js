const readline = require('readline')
const notasModule = require('./module/mediaEscolar')
const calcularImcModule = require('./module/calcularImc')
const calcularTabuadaModule = require('./module/calcularTabuada')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarMenu() {
    console.log('Escolha uma opção:')
    console.log('1. Calcular IMC')
    console.log('2. Calcular Médias Escolares')
    console.log('3. Calcular Tabuada')
    console.log('4. Sair')
}

function iniciarCalculoIMC() {
    calcularImcModule.entradaDados().then(({ entradaPeso, entradaAltura }) => {
        const imc = calcularImcModule.calcularImc(entradaPeso, entradaAltura)
        const resultado = calcularImcModule.situation(imc)
        calcularImcModule.showInfo(imc, resultado)
        mostrarMenu()
        selecionarOpcao()
    })
}

function calcularMediasEscolares() {
    notasModule.obterRelatorio()
}

function calcularTabuada(){
    calcularTabuadaModule.solicitarEntrada()
}

function selecionarOpcao() {
    rl.question('Digite o número da opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                iniciarCalculoIMC()
                break
            case '2':
                calcularMediasEscolares()
                break
            case '3':
                calcularTabuada()
                break
            case '4':
                console.log('Saindo do aplicativo.')
                break
            default:
                console.log('Opção inválida. Tente novamente.')
                mostrarMenu()
                selecionarOpcao()
        }
    })
}

mostrarMenu()
selecionarOpcao()
