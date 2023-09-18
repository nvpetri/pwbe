const readline = require('readline')

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0) // .reduce, uma função usada para reduzir ou acumular os valores de um array
    return soma / notas.length
}

function validarNotas(notas) {
    return notas.every((nota) => !isNaN(nota) && nota >= 0 && nota <= 100)
}

function mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media, mediaFinal) {
    console.log(`
    Relatório do aluno:
    O ${sexoAluno === 'F' ? 'aluna' : 'aluno'} ${aluno} foi ${status} na disciplina ${disciplina}.
    Curso: ${curso}
    Professor${sexoProfessor === 'F' ? 'a' : ''}: ${professor}
    Notas do aluno: ${notas.join(', ')}
    Nota do Exame: ${notaExame}
    Média Final: ${media}
    Média final do Exame: ${mediaFinal}
  `)
}

function obterRelatorio() {
    teclado.question('Nome do aluno: ', (aluno) => {
        teclado.question('Nome do professor: ', (professor) => {
            teclado.question('Sexo do professor (M/F): ', (sexoProfessor) => {
                teclado.question('Sexo do aluno (M/F): ', (sexoAluno) => {
                    teclado.question('Nome do curso: ', (curso) => {
                        teclado.question('Nome da disciplina: ', (disciplina) => {
                            teclado.question('Digite as 4 notas separadas por vírgula (ex: 80,75,90,60): ', (notasInput) => {
                                const notas = notasInput.split(',').map((nota) => parseFloat(nota)) //.split, divide o array .map percorre o array e aplica a função

                                if (!validarNotas(notas)) {
                                    console.log('Erro: Alguma nota está fora do intervalo permitido (0-100).')
                                    teclado.close()
                                    return
                                }

                                const media = calcularMedia(notas)
                                let status = ''

                                if (media >= 70) {
                                    status = 'aprovado'
                                } else if (media < 50) {
                                    status = 'reprovado'
                                } else {
                                    status = 'em exame'

                                    teclado.question('Digite a nota do exame: ', (notaExame) => {
                                        const mediaFinal = (parseFloat(notaExame) + media) / 2
                                        if (mediaFinal >= 60) {
                                            status = 'aprovado em exame'
                                        } else {
                                            status = 'reprovado no exame'
                                        }

                                        mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media, mediaFinal)
                                        teclado.close()
                                    })

                                    return
                                }

                                mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, '', media, '')
                                teclado.close()
                            })
                        })
                    })
                })
            })
        })
    })
}

module.exports = {
    calcularMedia,
    validarNotas,
    mostrarRelatorio,
    obterRelatorio,
  }