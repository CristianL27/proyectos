class apps{
  constructor(descargas, peso, puntuacion){
    this.descargas = descargas;
    this.peso = peso;
    this.puntuacion = puntuacion;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar(){
    if (this.instalada == false) {
      alert('se instalara la app');
      this.instalada = true;
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      alert('se desinstalara la app');
      this.instalada = false;
    }
  }
  abrir(){
    if (this.instalada == true && this.iniciada == false) {
      alert('la app ha sido iniciada');
      this.iniciada = true;
    }
  }
  cerrar() {
    if (this.instalada == true && this.iniciada == true)
    alert('la app se ha cerrado')
  }
  infoApps(){
    return `
    descargas: <b>${this.descargas}</b>, <br>
    peso: <b>${this.peso}</b>,<br>
    puntuacion: <b>${this.puntuacion}</b>.
    `
  }
}
app = new apps('18.000', '12mb', '4.5 estrellas');
app2 = new apps('10.000', '30mb', '4 estrellas');
app3 = new apps('20.000', '90mb', '3.9 estrellas');

document.write(
  `
  ${app.infoApps()}<hr>
  ${app2.infoApps()}<hr>
  ${app3.infoApps()}
  `
)
// app.instalar();
// app.desinstalar();
// app.abrir();
// app.cerrar();