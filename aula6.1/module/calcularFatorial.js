function calcularFatorial(numero){
    if (numero === 0)
        return 1
    else if (numero === 1)
        return 'Não é possivel fazer o calculo fatorial desse numero'
    else if (numero < 0)
        return 'Não é possivel fazer o calculo fatorial de números negativos'

        let fatorial = 1
        for(let i = 2; i<= numero; i++)
            fatorial *= i

        return fatorial
}

function solicitarEntrada(){
    teclado.question('Digite um número para CALCULAR O FATORIAL: ', (numero) => {
        const numeroValido = parseInt(numero)
        if(isNaN(numeroValido) || numero.trim() === ""){
            console.log('Entrada invalida. Certifique-se de que seja um número válido.')
            solicitarEntrada
        }else{
            const resultado = calcularFatorial(numeroValido)
            console.log(`Fatorial de ${numeroValido} é ${resultado}`)
        }
    })
}

solicitarEntrada()

module.exports = {
    solicitarEntrada
}