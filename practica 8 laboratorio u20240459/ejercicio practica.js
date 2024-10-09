//Contar intentos hasta acertar un número en este ejercicio se genera un 
//número aleatorio, y el usuario debe adivinarlo. Usamos un bucle do...while
//para seguir pidiendo números hasta que el usuario adivine el correcto
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

rl.setPrompt('Adivina un número entre 1 y 100: ');
rl.prompt();

rl.on('line', (input) => {
  attempts++;
  const userNumber = parseInt(input.trim());

  if (isNaN(userNumber)) {
    console.log('Entrada inválida. Por favor, ingrese un número.');
    rl.prompt();
  } else if (userNumber < secretNumber) {
    console.log('Demasiado bajo!');
    rl.prompt();
  } else if (userNumber > secretNumber) {
    console.log('Demasiado alto!');
    rl.prompt();
  } else {
    console.log(`¡Felicidades! Adivinaste el número en ${attempts} intentos.`);
    rl.close();
  }
});