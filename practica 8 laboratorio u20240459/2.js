const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let letra = '';
let veces = 0;
let cadena = '';

function preguntarLetra() {
  rl.question('Dame la letra ', (respuesta) => {
    letra = respuesta.toLowerCase();
    if (letra.length > 1 || !isNaN(letra)) {
      console.log('Debes elegir una letra [a-z]');
      preguntarLetra();
    } else {
      preguntarVeces();
    }
  });
}

function preguntarVeces() {
  rl.question('Cuantas repeticiones? ', (respuesta) => {
    veces = parseInt(respuesta);
    if (isNaN(veces) || veces < 1) {
      console.log('El número de repeticiones debe estar entre 1 y 5');
      preguntarVeces();
    } else {
      generarCadena();
    }
  });
}

function generarCadena() {
  while (veces > 0) {
    cadena += letra;
    veces--;
  }
  console.log(`Cadena generada: ${cadena}`);
  rl.close();
}

preguntarLetra();
