function validarEntradas(numeroInicial, numeroFinal) {
    if (numeroInicial < 0 || numeroInicial > 500 || numeroFinal < 100 || numeroFinal > 1000)
        return false;
    if (numeroInicial >= numeroFinal)
        return false;

    return true;
}

function obterSequenciaPares(numeroInicial, numeroFinal) {
    const sequenciaPares = [];
    for (let i = numeroInicial; i <= numeroFinal; i++)
        if (i % 2 === 0)
            sequenciaPares.push(i);

    return sequenciaPares;
}

function obterSequenciaImpares(numeroInicial, numeroFinal) {
    const sequenciaImpares = [];
    for (let i = numeroInicial; i <= numeroFinal; i++)
        if (i % 2 !== 0)
            sequenciaImpares.push(i);

    return sequenciaImpares;
}

module.exports = {
    validarEntradas,
    obterSequenciaPares,
    obterSequenciaImpares,
};