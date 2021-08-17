/*Programacion orientada a objetos*/
/*
clase: es una especie de plantilla para poder crear los objetos,
objetos: son el resultado de crear clases y no pueden tener el mismo nombre que la clase. los objetos se definen como const para que si en un futuro su valor se ve alterado se pueda detectar ya que daria un error,
atributo: son las propiedades o caracteristicas que tiene el objeto,
metodo: son las cosas que puede hacer el objeto,
constructor: cada clase va acompañada de un constructor que construye las propiedades del objeto,
instanciacion: es cuando se finaliza todo se puede decir que la clase esta instanciada, se instancia un objeto.
*/
class Animal{
  constructor(especie, edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años
    y soy de color ${this.color}`;
  }
  verInfo() {
      document.write(this.info + '<br>')
  }
}
/*Herencia */
class Perro extends Animal{
  constructor (especie, edad, color, raza){
    super(especie,edad,color);
    // this.raza = raza;
    this.raza = null;
  }
  // static ladrar(){
  //   alert('¡WAW!')
  // }
  set setRaza(newName){
    this.raza = newName;
  }
  get getRaza(){
    return this.raza;
  }
}

const perro = new Perro('Perro', 5, 'beige', 'doberman');
const gato = new Animal('Gato', 2, 'Marron');
const loro = new Animal('Loro', 3, 'Verde');
perro.setRaza = 'Pedro';
document.write(perro.getRaza)
// gato.ladrar();
/*
> abstraccion: se intenta reducir los componentes del objeto para que quede lo mas basico posible,
> modularidad:es la capacidad de resolver un problema grande al diidirlo en variar partes,
> encaosulamiento: consiste en hacer que toda la data sea privada para que el usuario no pueda acceder a ella facilmente,
> polimorfismo: consiste en ver como un objeto se comporta de manera distinta ante el mismo metodo.
*/