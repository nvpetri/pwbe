function validarEntradas(numeroInicial, numeroFinal) {
    if (
        numeroInicial < 0 || numeroInicial > 500 ||
        numeroFinal < 100 || numeroFinal > 1000 ||
        numeroInicial >= numeroFinal
    ) {
        return false;
    }
    return true;
}

function calcularParesImpares(numeroInicial, numeroFinal, opcao) {
    let numerosPares = [];
    let numerosImpares = [];

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
        } else {
            numerosImpares.push(i);
        }
    }

    if (opcao === 'pares') {
        return numerosPares;
    } else if (opcao === 'impares') {
        return numerosImpares;
    } else {
        return { pares: numerosPares, impares: numerosImpares };
    }
}

function exibirResultado(resultado) {
    if (!resultado) {
        console.log('Nenhum resultado encontrado.');
        return;
    }

    if (typeof resultado === 'object') {
        if (resultado.pares.length > 0) {
            console.log('Lista de números Pares:');
            resultado.pares.forEach((numero) => {
                console.log(numero);
            });
            console.log(`Qtde de números Pares encontrados: ${resultado.pares.length}`);
        } else {
            console.log('Nenhum número Par encontrado.');
        }

        if (resultado.impares.length > 0) {
            console.log('\nLista de números Impares:');
            resultado.impares.forEach((numero) => {
                console.log(numero);
            });
            console.log(`Qtde de números Impares encontrados: ${resultado.impares.length}`);
        } else {
            console.log('Nenhum número Impar encontrado.');
        }
    } else {
        console.log('Lista de números:');
        resultado.forEach((numero) => {
            console.log(numero);
        });
        console.log(`Qtde de números encontrados: ${resultado.length}`);
    }
}

module.exports = {
    validarEntradas,
    calcularParesImpares,
    exibirResultado
};