const SinParametros = () => {
    consola.log("¡Hola! Esta es una función de flecha sin parámetros.");
    };

    const valor = 20

const UnParametro = (mensaje) => {
      console.log(mensaje);
    };

    UnParametro("Este es un mensaje que se muestra en la consola.");

    const DosParametros = (parametro1, parametro2) => {
      console.log("Estudiante:", parametro1);
      console.log("Calificación:", parametro2);
    };

   DosParametros("Juan Jose", 4.5);

   // Variables con let

let variable1 = 10;
let variable2 = 120;
let variable3 = true;
let variable4 = [5, 10, 15];
let variable5 = { nombre: "JAndres", edad: 33 };

// Variables con const
const constante1 = 2.32;
const constante2 = 4;
const constante3 = false;
const constante4 = [20, 25, 30];
const constante5 = { nombre: "María", edad: 25 };

// Función que utiliza variables con let
function mostrarVariablesLet() {
  console.log("Divición:", variable1/constante1);
  console.log("Multiplicación:", variable2 * constante2);
  console.log(variable3, constante3)
  console.log("Tablas del 5:", variable4, constante4);
  console.log("Objeto: ", variable5, constante5);
}



// Llamada a la función
mostrarVariablesLet();





