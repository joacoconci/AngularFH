/*
    ===== Código de TypeScript =====
*/
function classDecorator<t extends { new (...args: any[]): {} }>(
  constructor: t
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";
  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
