function validarNotas(notas) {
    return notas.every((nota) => !isNaN(nota) && nota >= 0 && nota <= 100);
}

function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

function calcularStatusAluno(notas) {
    const media = calcularMedia(notas);

    if (media >= 70) {
        return 'aprovado';
    } else if (media < 50) {
        return 'reprovado';
    } else {
        return 'em exame';
    }
}

function calcularResultado(aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame = 0) {
    const media = calcularMedia(notas);
    let resultado = '';

    if (status === 'aprovado') {
        resultado = 'aprovado';
    } else if (status === 'reprovado') {
        resultado = 'reprovado';
    } else if (status === 'em exame') {
        const mediaFinal = (media + notaExame) / 2;
        if (notaExame >= 60 && mediaFinal >= 50) {
            resultado = 'aprovado';
        } else {
            resultado = 'reprovado';
        }
    }

    return {
        aluno,
        professor,
        sexoAluno,
        sexoProfessor,
        curso,
        disciplina,
        notas,
        status,
        notaExame,
        media,
        resultado
    };
}

function mostrarRelatorio(resultado) {
    const { aluno, professor, sexoAluno, sexoProfessor, curso, disciplina, notas, status, notaExame, media, resultado: statusFinal } = resultado;
    const alunoLabel = sexoAluno === 'F' ? 'aluna' : 'aluno';
    const professorLabel = sexoProfessor === 'F' ? 'professora' : 'professor';

    let mensagemMedia = '';
    if (status === 'aprovado') {
        mensagemMedia = `Média Final: ${media}`;
    } else if (status === 'em exame') {
        mensagemMedia = `Média Final: ${media}, Nota do Exame: ${notaExame}`;
    }

    console.log(`
    Relatório do ${alunoLabel} ${aluno} foi ${statusFinal} na disciplina ${disciplina}.
    Curso: ${curso}
    ${professorLabel}: ${professor}
    Notas do ${alunoLabel}: ${notas.join(', ')}
    Nota do Exame: ${status === 'em exame' ? notaExame : 'N/A'}
    ${mensagemMedia}
  `);
}
module.exports = {
    validarNotas,
    calcularMedia,
    calcularStatusAluno,
    calcularResultado,
    mostrarRelatorio
};