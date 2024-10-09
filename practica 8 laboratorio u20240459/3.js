const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarCadena() {
    rl.question('Introduce una cadena de texto: ', (cadena) => {
        preguntarLetra(cadena);
    });
}

function preguntarLetra(cadena) {
    rl.question('Introduce la letra a contar: ', (letraAbuscar) => {
        let contadorLetras = 0;
        let posicion = 0;

        do {
            if (cadena[posicion].toLowerCase() === letraAbuscar.toLowerCase()) {
                contadorLetras++;
            }
            posicion++;
        } while (posicion < cadena.length);

        console.log(`La letra '${letraAbuscar}' aparece ${contadorLetras} veces en la cadena.`);
        rl.close();
    });
}

preguntarCadena();
