class Telefonos {
  constructor(color, peso, resolucion, camara, ram) {
    this.color = color;
    this.peso = peso;
    this.resolucion = resolucion;
    this.camara = camara;
    this.ram = ram;
    this.encendido = false;
    this.info = `Telefono de color ${this.color} con un peso de ${this.peso} gramos, su pantalla tiene una resolucion de ${this.resolucion} px con una camara de ${this.camara} Mpx y una ram de ${this.ram} GB`;
  }
  verInfo() {
    document.write(this.info + '<br>')
  }
  botonEncendido() {
    if (this.encendido == false) {
      alert('telefono encendido');
      this.encendido = true;
    } else {
      alert('telefono apagado');
      this.encendido = false
    }
  }
  reinicio() {
    if (this.encendido == true) {
      alert('reiniciando telefono')
    } else {
      alert('el telefono esta apagado');
    }
  }
  fotos() {
    alert(`se tomo una foto con una resolucion de ${this.camara}Mpx`)
  }
  video() {
    alert(`se grabo un video con una resolucion de ${this.camara}Mpx`)
  }
}
class altaGama extends Telefonos{
  constructor(color, peso, resolucion, camara, ram, camaraExtra){
    super(color,peso,resolucion,camara,ram);
    this.camaraExtra = camaraExtra;
  }
  camaralenta(){
    alert(`Se esta grabando un video en camara lenta`)
  }
  reconocimientoFacial() {
    alert(`se llevara acabo un reconocimiento facial`)
  }
  infoAltagama(){
    document.write(this.info + ` Resolución de Camara Extra ${this.camaraExtra}` + '<br>')
  }
}
// const redmi = new Telefonos('Negro', 800, '1280x720', 48, 6);
// const iphone = new Telefonos('Dorado', 930, '1280720', 40, 8);
// const samsung = new Telefonos('Blanco', 830, '1280x720', 50, 4);

// redmi.verInfo();
// iphone.verInfo();
// samsung.verInfo();

// redmi.botonEncendido();
// redmi.reinicio();
// redmi.fotos();
// redmi.video();

const redmi = new altaGama('Negro', 800, '1280x720', 48, 6, 35);
redmi.infoAltagama();