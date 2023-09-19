const readline = require('readline')

function entradaDados() {
    return new Promise((resolve) => { //promise é um objeto que representa o resultado de uma operação, nesse caso serve para que a entrada de dados seja acessivel por todos os outros, uma vez que ela é uma const
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question('Olá, qual seu peso? ', function(entradaPeso) {                                                                                                                                                                                                                                                      //nicolas vasconcelos
            rl.question('Qual sua altura? ', function(entradaAltura) {
                rl.close()
                resolve({ entradaPeso, entradaAltura })
            })//nicolas vasconcelos
        })
    })
}

function calcularImc(entradaPeso, entradaAltura) {
    let peso = Number(entradaPeso)
    let altura = Number(entradaAltura)

    let alturaCalc = altura * altura
    let imc = peso / alturaCalc

    imc = imc.toFixed(1)//nicolas vasconcelos

    return imc
}

function situation(imc) {
    let resultado

    switch (true) {
        case imc < 18.5:
            resultado = 'você está abaixo do peso'
            break
        case imc >= 18.5 && imc < 25.0:
            resultado = 'você está no peso ideal!'
            break
        case imc >= 25.0 && imc < 30.0:
            resultado = 'você está com sobrepeso!'//nicolas vasconcelos
            break
        case imc >= 30.0 && imc < 35.0:
            resultado = 'você está com Obesidade Nível I!'
            break
        case imc >= 35.0 && imc < 40.0:
            resultado = 'você está com Obesidade Nível II!'
            break
        case imc >= 40:
            resultado = 'você está com Obesidade Nível III!'
            break
        default:
            resultado = 'situação não identificada'
            break
    }//nicolas vasconcelos

    return resultado
}

function showInfo(imc, resultado) {
    console.log(`Olá, seu IMC é de: ${imc}, ${resultado}`)
}//nicolas vasconcelos

module.exports = {
    calcularImc,
    situation,
    showInfo,
    entradaDados
}
