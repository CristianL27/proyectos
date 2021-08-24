/*
metodos de cadena:
> concat(): junta dos o mas cadenas y retorna una nueva.

> startsWith(): si una cadena comienza con los caracteres de otra cadena, devuelve true sino devuelve false.
> endsWith():  si una cadena termina con los caracteres de otra cadena, devuelve true sino devuelve false.
> includes(): si unna cadena puede encontrarse dentro de otra cadena, devuelve true sino devuelve false.
> indexOf(): devuelve el indice del primer caracter de la cadena, sino existe devuelve -1
>lastIndexOf(): devuelve el ultimo indice del primer caracter de la cadena, sino existe devuelve -1.

> padStart() [propuesta de estandar]: rellenar la cadena al principio con los caracteres deseados.
> padEnd [propuesta de ECMA]: rellenar la cadena al final con los caracteres deseados.
> repeat(): devuelve la misma cadena pero repetida la cantidad que le indiquemos.

> split(): divide la cadena como le pidamos.
> substring(): nos retorna un pedazo de la cena que seleccionamos.
> toLowerCase(): convierte una cadena a minusculas.
> toUpperCase(): convierte una cadena a mayuscula.
> toString(): metodo devuelve una cadena que representa al objeto especificado.
> trim(): elimina los espacios en blanco al principio y al final de una cadena.
> trimEnd(): elimina los espacios en blanco al final de una cadena.
> trimStrart(): elimina los espacios en blanco al comienzo de una cadena.
> valueOf(): retorna el valor primitivo de un objeto string.

*/

/*
let cadena = 'cadena de prueba';
let cadena2 = "cadena"
resultado = cadena.startsWith(cadena2);
document.write(resultado);
*/
/*
let cadena = 'abcde';
let cadena2 = '';
// resultado = cadena.padStart(10,'12345');
resultado = cadena.padEnd(10,'54321');
document.write(resultado);
*/
/*
let cadena = '123 ';
resultado = cadena.repeat(5);
document.write(resultado);
*/
/*
let cadena = "Hola como estas";
resultado = cadena.split(' ');
document.write(resultado[2])
*/
/*
let cadena = "ABCDEFG";
resultado = cadena.substring(0, 2);
document.write(resultado)
*/
/*
let cadena = "Maria Se La Pasa Comiendo";
// resultado = cadena.toLowerCase();
resultado = cadena.toUpperCase();
document.write(resultado)
*/
/*
let cadena = 50;
resultado = cadena.toString();
document.write(2 + resultado);
*/

/*
Metodos de array:
    ----Transformadores----
> pop(): elimina el ultimo elemento de un array y lo devuelve.
> shift(): elimina el primer elemento de un array y lo devuelve.
> push(): agrega un elemento al array al final de la lista.
> reverse(): invierte el orden de los elementos de un array.
> unshift(): agrega uno o mas al inicio del array y devuelve la nueva longitud del array.
> sort(): ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.
> splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    ----Accesores----
> join(): une todos los elementos de una matriz (u objeto similar) en una cadena y lo devuelve.
> slice():devuelve una parte del array dentro de un nuevo array empezando por el inicio hasta fin (fin no incluido).
> Metodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes().
    ----De Repeticion----
> filter(): crea un nuevo array con todos los elementos que cumplan la condicion.
> forEach(): ejecuta la funcion indicada una vez por cada elemeno del array.
> map():
*/
/*
let numeros = ['abecedario', 'manzana','pedo','dedo','bobo'];
// numeros.filter((numero)=>{
//   document.write(numero + '<br>')
// })
resultado = numeros.filter((numero => numero.length > 5))
document.write(resultado + '<br>')
*/
/*
Objeto Math Basico:
      ----Metodos----
> sqrt(): devuelve la raiz cuadrada de un numero.
> cbrt(): devuelve la raiz cubica de un numero.
> max(): devuelve el mayor de cero o mas numeros.
> min(): devuelve el mas pequeño de cero o mas numeros.
> random(): devuelve un numero pseudo-aleatorio entre 0 y 1.
> round(): devuelve el valor de un numero redondeado al numero entero mas cercano.
> fround():devuelve la representacion flotante de precision simple mas cercana de un numero.
> floor(): devuelve el mayor entero menor o igual a un numero.
> trunc(): devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.
      ----Propiedades----
> PI: ratio de la circunferencia de un circulo resp[ecto a su diametro, aprox 3.1415]
> SQRT1_2: raiz cuadrada de 1/2; equivalente 1 sobre la raiz cuadrada de 2, aprox 0.707
> SQRT2: raiz cuadrada de 2, aprox 1.414

> E: constante de Euler, la base de los logaritmos naturales, aprox 2.718
> LN2: logaritmo natural de 2, aprox 0.693.
> LN10: logaritmo natural de 10, aprox 2.303.
> LOG2E: logaritmo de E con base 2, aprox 1.443.
> LOG10E: logaritmo de E con base 10, aprox 0.434
*/