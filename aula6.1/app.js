const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('Escolha uma opção:');
    console.log('1. Calcular IMC');
    console.log('2. Outra opção');
    console.log('3. Sair');
}

function iniciarCalculoIMC() {
    const calcularImcModule = require('./module/calcularImc');
    calcularImcModule.entradaDados().then(({ entradaPeso, entradaAltura }) => {
        const imc = calcularImcModule.calcularImc(entradaPeso, entradaAltura);
        const resultado = calcularImcModule.situation(imc);
        calcularImcModule.showInfo(imc, resultado);
        mostrarMenu();
        selecionarOpcao();
    });
}

function outraOpcao() {
    console.log('Esta é outra opção.');
    mostrarMenu();
    selecionarOpcao();
}

function selecionarOpcao() {
    rl.question('Digite o número da opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                iniciarCalculoIMC();
                break;
            case '2':

                break;
            case '3':
                console.log('Saindo do aplicativo.');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                mostrarMenu();
                selecionarOpcao();
        }
    });
}

mostrarMenu();
selecionarOpcao();
