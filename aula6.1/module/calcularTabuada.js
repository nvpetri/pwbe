function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    const tabuadas = [];

    for (let t = tabuadaInicial; t <= tabuadaFinal; t++) {
        const tabuada = [];

        for (let n = contadorInicial; n <= contadorFinal; n++) {
            const resultado = t * n;
            tabuada.push(`${t} x ${n} = ${resultado}`);
        }

        tabuadas.push({
            tabuada: t,
            resultados: tabuada
        });
    }

    return tabuadas;
}

function exibirTabuadas(tabuadas) {
    tabuadas.forEach((tabuada) => {
        console.log(`Tabuada do [${tabuada.tabuada}]`);
        tabuada.resultados.forEach((resultado) => {
            console.log(resultado);
        });
    });
}

module.exports = {
    calcularTabuada,
    exibirTabuadas
};