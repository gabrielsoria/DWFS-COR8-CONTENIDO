/*
    =========================
    Implementar forEach sobre el prototipo de arrays

    La función forEach ejecuta una función por cada elemento del array

    Parámetro:
        - Una función que recibe un elemento del array y hace algo con él
    =========================
*/

Array.prototype.forEach = function forEachFn(Fn) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index];

    Fn(element);
  }
};

/*
    =========================
    Caso 1
    =========================
*/

const numeros = [1, 2, 3];

// Muestra por la consola el número multiplicado por 10
function multiplicarPor10(numero) {
  console.log(numero * 10);
}

numeros.forEach(multiplicarPor10);

/*
    =========================
    Caso 2
    =========================
*/

const personas = [
  {
    nombre: "Persona 1",
    edad: 10
  },
  {
    nombre: "Persona 2",
    edad: 20
  },
  {
    nombre: "Persona 3",
    edad: 30
  }
];

// Muestra por consola el siguiente mensaje
// "Hola, soy XXX y tengo XXX años"
function mostrarMensaje(persona) {
  console.log('Hola, soy', persona.nombre, 'y tengo', persona.edad, 'años');
}

personas.forEach(mostrarMensaje);
