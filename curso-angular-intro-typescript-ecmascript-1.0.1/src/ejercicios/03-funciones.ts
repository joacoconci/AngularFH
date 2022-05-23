/*
    ===== Código de TypeScript =====
*/

// function sumar(a: number, b: number): number {
//   return a + b;
// }

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(numero: number, otroNumero: number, base: number): number {
  return numero * base;
}
// const resultado = multiplicar(10, 20,30);

// console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp:()=> void;
}


function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Striker",
  pv: 50,
  mostrarHp() {
    console.log("puntos de vida:", this.pv);
  },
};

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();