
  // document.write(`${invitado} <br>`);
  // invitado++
  let invitado = 1;
  while (invitado <=4) {
  let nombreEntrada = prompt("Cual es tu nombre?");
  let edadEntrada = prompt("Cual es tu edad?");
  let horaDeEntrada = prompt("hora de llegada");
  let pagoDeEntrada = prompt("por favor coloque el valor de su entrada")

  if (edadEntrada>=18 && horaDeEntrada !== "2am") {
    document.write(`Invitado ${invitado} es: ${nombreEntrada}, Tiene: ${edadEntrada}, Llego a las: ${horaDeEntrada}, pago de entrada: ${pagoDeEntrada}$<br>`);
    invitado++;

  } else if (horaDeEntrada === "2am" ) {
    document.write(`<b>Felicidades ${nombreEntrada} su entrada es gratuita, le devolvemos los ${pagoDeEntrada}$ de su entrada </b><br>`);
  }
  else{
    alert(`Lo sentimos no posee la edad minima para entrar en la fiesta`)
  }
}