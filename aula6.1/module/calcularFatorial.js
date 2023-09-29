function calcularFatorial(numero) {
    if (numero === 0)
        return 1;
    else if (numero === 1)
        return 'Não é possível fazer o cálculo fatorial desse número';
    else if (numero < 0)
        return 'Não é possível fazer o cálculo fatorial de números negativos';

    let fatorial = 1;
    for (let i = 2; i <= numero; i++)
        fatorial *= i;

    return fatorial;
}

module.exports = {
    calcularFatorial,
};