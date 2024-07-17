//FAZ A PÁGINA PARAR DE DAR RESET.
document.getElementById('button').addEventListener('click', function(event){
    event.preventDefault()
    console.log('Não recarregou!')
});


//FAZ A MAGICA ACONTECER!!!
function outcame() {

    let num1 = Number(document.getElementById('number1').value)
    let num2 = Number(document.getElementById('number2').value)
    let total = 0
    
    if (document.getElementById('radius1').checked)
        total = num1 + num2
    else if (document.getElementById('radius2').checked)
        total = num1 - num2
    else if (document.getElementById('radius3').checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById('resultado').innerHTML = 'Result: ' + String(total)
}
