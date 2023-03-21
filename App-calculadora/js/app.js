function sumar(){
    const form = document.getElementById('form');
    let operandoA = form ['OperandoA']
    let operandoB = form ['OperandoB']
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value)
    if(isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
    console.log(`Resultado: ${resultado}`)
}

function restar(){
    const form = document.getElementById('form');
    let operandoA = form ['OperandoA']
    let operandoB = form ['OperandoB']
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value)
    if(isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
    console.log(`Resultado: ${resultado}`)
}
function multiplicar(){
    const form = document.getElementById('form');
    let operandoA = form ['OperandoA']
    let operandoB = form ['OperandoB']
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value)
    if(isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
    console.log(`Resultado: ${resultado}`)
}
function dividir(){
    const form = document.getElementById('form');
    let operandoA = form ['OperandoA']
    let operandoB = form ['OperandoB']
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value)
    if(isNaN(resultado))
    resultado = 'la operacion no incluye numeros'
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
    console.log(`Resultado: ${resultado}`)
}