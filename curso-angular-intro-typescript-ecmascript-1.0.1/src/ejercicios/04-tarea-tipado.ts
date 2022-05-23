/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    pais: string;
    ciudad: string; 
  },
  mostrarDireccion:()=>string;
}

const superHeroe = {
  nombre: "spiderman",
  edad: 38,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);

