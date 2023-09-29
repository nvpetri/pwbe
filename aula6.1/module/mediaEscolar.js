function calcularMediaEscolar(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, notaExame) {
    if (!validarNotas(notas)) {
        console.log('Erro: Alguma nota está fora do intervalo permitido (0-100).');
        return;
    }

    const media = calcularMedia(notas);
    let status = '';

    if (media >= 70) {
        status = 'aprovado';
    } else if (media < 50) {
        status = 'reprovado';
    } else {
        status = 'em exame';
    }

    if (status === 'em exame') {
        const mediaFinal = (parseFloat(notaExame) + media) / 2;
        if (mediaFinal >= 60) {
            status = 'aprovado em exame';
        } else {
            status = 'reprovado no exame';
        }
    }

    mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media);
}

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function validarNotas(notas) {
    return notas.every((nota) => !isNaN(nota) && nota >= 0 && nota <= 100);
}

function mostrarRelatorio(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media) {
    console.log(`
    Relatório do aluno:
    O ${sexoAluno === 'F' ? 'aluna' : 'aluno'} ${aluno} foi ${status} na disciplina ${disciplina}.
    Curso: ${curso}
    Professor${sexoProfessor === 'F' ? 'a' : ''}: ${professor}
    Notas do aluno: ${notas.join(', ')}
    Nota do Exame: ${notaExame || 'N/A'}
    Média Final: ${media}
  `);
}

module.exports = {
    calcularMediaEscolar,
    validarNotas,
    mostrarRelatorio
};