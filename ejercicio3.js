// Ejercicio 1: Imprimir por consola los números pares entre 0 y 100 usando el ciclo for
console.log("Números pares entre 0 y 100:");
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ejercicio 2: Escribir un programa que imprima las tablas del 1 al 10 usando el ciclo for
console.log("\nTablas del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(""); // Agrega una línea en blanco para separar las tablas
}
