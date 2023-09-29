const readline = require('readline');
const notasModule = require('./module/mediaEscolar');
const calcularImcModule = require('./module/calcularImc');
const calcularTabuadaModule = require('./module/calcularTabuada');
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
    rl.question('Olá, qual seu peso? ', function(entradaPeso) {
        rl.question('Qual sua altura? ', function(entradaAltura) {
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

                                if (!notasModule.validarNotas(notas)) {
                                    console.log('Erro: Alguma nota está fora do intervalo permitido (0-100).');
                                    rl.close();
                                    return;
                                }

                                const status = notasModule.calcularMediaEscolar(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas);

                                if (status === 'em exame') {
                                    rl.question('Digite a nota do exame: ', (notaExame) => {
                                        notasModule.calcularMediaEscolar(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, parseFloat(notaExame));
                                        rl.close();
                                    });
                                } else {
                                    notasModule.mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, '', '');
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
    rl.question('Digite o valor de início da tabuada: ', function(tabuadaInicial) {
        rl.question('Digite o último valor da tabuada: ', function(tabuadaFinal) {
            rl.question('Digite o contador inicial: ', function(contadorInicial) {
                rl.question('Digite o contador final: ', function(contadorFinal) {
                    calcularTabuadaModule.calcularTabuada(
                        parseInt(tabuadaInicial),
                        parseInt(tabuadaFinal),
                        parseInt(contadorInicial),
                        parseInt(contadorFinal)
                    );
                    mostrarMenu();
                    selecionarOpcao();
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
            calcularParesImparesModule.calcularParesImpares(
                parseInt(numeroInicial),
                parseInt(numeroFinal)
            );
            mostrarMenu();
            selecionarOpcao();
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