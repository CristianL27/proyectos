let operaciones = parseInt(prompt("ingrese el número relacionado con su operación: 1: Suma, 2: Resta, 3: Multiplicación, 4: Divición"))

if (operaciones < 1 || operaciones > 4 ){
  alert('Error el número seleccionado no corresponde con una operación válida')

}else{
  valor1 = parseInt(prompt("ingrese el primer numero"))
  valor2 = parseInt(prompt("ingrese el segundo numero"))
}

function calculadora(num1, num2){

  let resultado
  if (operaciones === 1) {
    operacion = 'Suma'
    resultado = num1 + num2
  }else if (operaciones === 2) {
    operacion = 'Resta'
    resultado = num1 - num2
  } else if (operaciones === 3) {
    operacion = 'Multiplicación'
    resultado = num1 * num2
  } else if (operaciones === 4) {
    operacion = 'División'
    resultado = num1 / num2
  }

 document.write(`El resultado de la ${operacion} es igual a ${resultado} `)
}
calculadora(valor1, valor2)
