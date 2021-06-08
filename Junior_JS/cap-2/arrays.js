let tea_box = ["Lemon-tea","Black-tea","Test-tea"];
console.log(tea_box[1]);
/*
  un array es un conjunto de datos los cuales se les puede llamar posteriormente al ejecutar el programa, y las posiciones de los arrays comienzan a partir del cero ejem: [0,1,2,3,4,etc]
*/

//Arrays asociativos

let Pc = {
    nombre: "Lostcr",
    procesador: "Intel Core I3",
    ram: "8GB",
    HDD: "250gb"
};
console.log(Pc["procesador"]);
/*con los arrays asociativos se les asigna un nombre a cada dato dentro del array haciendo que al momento de extraer informacion se deba usar el nombre asignado al valor que se quiere mostrar en ves de las posiciones numericas de un arrays normal. */

//bucles e iteraciones
/*
bucles= while:primero pregunta luego ejecuta,
        do while: ejecuta y despues pregunta,
        for: ,
        for in: recorre el array y guarda el valor de la posision ,
        for of: recorre el array y guarda el valor de la posicion.

iteración=  break: cuando se ejecuta detiene el bucle y sigue  con la ejecucion del resto del programa,
            label: nos permite asociar un bucle a un nombre para terminarlo cuando queramos,
            continue: detiene la iteracion del bucle en un punto dado y continua con su ejecucion.
*/
//funciones

function nombreDeLaFuncion(parametroDeFuncion) {
  //codigo a ejecutar
}
//para llamar y ejecutar una funcion se debe hacer lo siguiente:
nombreDeLaFuncion();
/*cada funcion debe tener una caracteristica especifica y no diferentes caracteristicas dentro de la misma funcion */

//return se utiliza para saber los valores que devuelve una funcion

/*parametros de una funcion:
  Los parámetros en una función so simplemente valores que pasas para ser procesados o ser parte de un proceso. Los parámetros de una función pasan a ser en realidad variables locales.
*/

//funciones flecha

const saludar = (nombre) =>{
  let frase = `Hello ${nombre}! how are you? <br>`;
  document.write(frase);
}
saludar("pedro");
/*si solo se usa un parametro la funcion flecha no requiere el uso de parentecis, ademas de que si solo se usa una linea de codigo para la funcion tambien se pueden omitir las llaves ejemplo: */

const saludo = nombre => document.write(`Hello ${nombre}! how are you?`);
saludo("juan");