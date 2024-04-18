//Escriba un código con un bucle DO WHILE que pregunte a los pasajeros de
//una aerolínea de cercanías si quieren un asiento junto a la ventana y realice
//un seguimiento de sus respuestas. El vuelo tiene 8 pasajeros y 4 asientos
//junto a la ventana. Interrumpa el circuito cuando todos los asientos junto a la
//ventana estén ocupados. Una vez finalizado el circuito, muestre la cantidad
//de asientos junto a la ventana ocupados y la cantidad de pasajeros
//interrogados.
const pasajerosTotales = 8;
const asientosVentanaTotales = 4;

let pasajerosInterrogados = 0;
let asientosVentanaOcupados = 0;

while (asientosVentanaOcupados < asientosVentanaTotales && pasajerosInterrogados < pasajerosTotales) {
    let respuesta = Math.random() < 0.5 ? "sí" : "no"; // Simulamos respuestas aleatorias
    console.log("¿Quieres un asiento junto a la ventana? (sí/no): " + respuesta);

    if (respuesta.toLowerCase() === 'sí') {
        asientosVentanaOcupados++;
    }

    pasajerosInterrogados++;
}

console.log("Cantidad de asientos junto a la ventana ocupados:", asientosVentanaOcupados);
console.log("Cantidad de pasajeros interrogados:", pasajerosInterrogados);
