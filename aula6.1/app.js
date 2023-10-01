const readline = require('readline');
const mediaEscolarModule = require('./module/mediaEscolar');
const calcularImcModule = require('./module/calcularImc');
const tabuadaModule = require('./module/calcularTabuada');
const calcularFatorialModule = require('./module/calcularFatorial');
const calcularParesImparesModule = require('./module/calcularParesImpares');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('Escolha uma opção:');
    console.log('1. Calcular IMC');
    console.log('2. Calcular Médias Escolares');
    console.log('3. Calcular Tabuada');
    console.log('4. Calculadora Fatorial');
    console.log('5. Calcular Pares e Ímpares');
    console.log('6. Sair');
}

function solicitarEntradaImc() {
    rl.question('Olá, qual seu peso? ', function(entradaPesoo) {
        rl.question('Qual sua altura? ', function(entradaAlturaa) {

            const entradaPeso = entradaPesoo.replace(',', '.');
            const entradaAltura = entradaAlturaa.replace(',', '.');

            const imc = calcularImcModule.calcularImc(entradaPeso, entradaAltura);
            const resultado = calcularImcModule.situation(imc);
            console.log(`Olá, seu IMC é de: ${imc}, ${resultado}`);
            mostrarMenu();
            selecionarOpcao();
        });
    });
}

function solicitarEntradaMediasEscolares() {
    rl.question('Nome do aluno: ', (aluno) => {
        rl.question('Nome do professor: ', (professor) => {
            rl.question('Sexo do professor (M/F): ', (sexoProfessor) => {
                rl.question('Sexo do aluno (M/F): ', (sexoAluno) => {
                    rl.question('Nome do curso: ', (curso) => {
                        rl.question('Nome da disciplina: ', (disciplina) => {
                            rl.question('Digite as 4 notas separadas por vírgula (ex: 80,75,90,60): ', (notasInput) => {
                                const notas = notasInput.split(',').map((nota) => parseFloat(nota));

                                if (!mediaEscolarModule.validarNotas(notas)) {
                                    console.log('Erro: Alguma nota está fora do intervalo permitido (0-100).');
                                    rl.close();
                                    return;
                                }

                                const status = mediaEscolarModule.calcularStatusAluno(notas);

                                if (status === 'em exame') {
                                    rl.question('Digite a nota do exame: ', (notaExame) => {
                                        const resultado = mediaEscolarModule.calcularResultado(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, parseFloat(notaExame));
                                        mediaEscolarModule.mostrarRelatorio(resultado);
                                        rl.close();
                                    });
                                } else {
                                    const resultado = mediaEscolarModule.calcularResultado(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status);
                                    mediaEscolarModule.mostrarRelatorio(resultado);
                                    rl.close();
                                }
                            });
                        });
                    });
                });
            });
        });
    });
}

function solicitarEntradaTabuada() {
    rl.question('Digite a tabuada inicial (entre 2 e 100): ', function(tabuadaInicial) {
        rl.question('Digite a tabuada final (entre 2 e 100): ', function(tabuadaFinal) {
            rl.question('Digite o contador inicial (entre 1 e 50): ', function(contadorInicial) {
                rl.question('Digite o contador final (entre 1 e 50): ', function(contadorFinal) {
                    const tabuadaIni = parseInt(tabuadaInicial);
                    const tabuadaFin = parseInt(tabuadaFinal);
                    const contadorIni = parseInt(contadorInicial);
                    const contadorFin = parseInt(contadorFinal);

                    if (
                        isNaN(tabuadaIni) || isNaN(tabuadaFin) ||
                        isNaN(contadorIni) || isNaN(contadorFin) ||
                        tabuadaIni < 2 || tabuadaIni > 100 ||
                        tabuadaFin < 2 || tabuadaFin > 100 ||
                        contadorIni < 1 || contadorIni > 50 ||
                        contadorFin < 1 || contadorFin > 50
                    ) {
                        console.log('Entradas inválidas. Certifique-se de que os valores estão dentro dos limites especificados.');
                    } else {
                        const tabuadas = tabuadaModule.calcularTabuada(tabuadaIni, tabuadaFin, contadorIni, contadorFin);
                        tabuadaModule.exibirTabuadas(tabuadas);
                    }

                    rl.close();
                });
            });
        });
    });
}

function calcularFatorial() {
    rl.question('Digite um número para calcular o fatorial: ', function(numero) {
        const resultado = calcularFatorialModule.calcularFatorial(parseInt(numero));
        console.log(`O fatorial de ${numero} é: ${resultado}`);
        mostrarMenu();
        selecionarOpcao();
    });
}

function calcularParesImpares() {
    rl.question('Digite o número inicial: ', function(numeroInicial) {
        rl.question('Digite o número final: ', function(numeroFinal) {
            if (!calcularParesImparesModule.validarEntradas(numeroInicial, numeroFinal)) {
                console.log('Entradas inválidas. Certifique-se de que o número inicial está entre 0 e 500, o número final entre 100 e 1000, e o número inicial é menor que o número final.');
                rl.close();
                return;
            }

            rl.question('Escolha a opção (pares/impares/ambos): ', function(opcao) {
                opcao = opcao.toLowerCase().trim();
                if (opcao !== 'pares' && opcao !== 'impares' && opcao !== 'ambos') {
                    console.log('Opção inválida. Escolha entre "pares", "impares" ou "ambos".');
                    rl.close();
                    return;
                }

                const resultado = calcularParesImparesModule.calcularParesImpares(parseInt(numeroInicial), parseInt(numeroFinal), opcao);
                calcularParesImparesModule.exibirResultado(resultado);

                rl.close();
            });
        });
    });
}

function selecionarOpcao() {
    rl.question('Digite o número da opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                solicitarEntradaImc();
                break;
            case '2':
                solicitarEntradaMediasEscolares();
                break;
            case '3':
                solicitarEntradaTabuada();
                break;
            case '4':
                calcularFatorial();
                break;
            case '5':
                calcularParesImpares();
                break;
            case '6':
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