function entradaDados(){
    let readline = require('readline')

    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Olá, qual seu peso?', function(entradaPeso){
        rl.question('Qual sua altura?', function(entradaAltura){
            return entradaAltura, entradaPeso
        })  
    })
}

function calcularImc(entradaPeso, entradaAltura){
    let peso = Number(entradaPeso)
    let altura = Number(entradaAltura)

    alturaCalc = altura * altura
    let imc = peso/alturaCalc

    return imc
}

function situation(imc){

    switch(imc){
        case imc<18.5:
            let resultado = 'você está abaixo do peso'
            return resultado
            break
    }
}

function showInfo(imc, resultado){

    console.log(`Olá, seu IMC é de: ${imc}, ${resultado}`)

    

}

module.exports = {
    calcularImc,
    situation,
    showInfo,
    entradaDados
}
