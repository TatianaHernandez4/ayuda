function pedirNumero() {
    console.log('Por favor, ingresa un número mayor a 100: ');
    console.log('Si no se ingresa un número válido, el programa continuará solicitando un número válido.');

    function verificarNumero(numero) {
        if (parseInt(numero) <= 100 || isNaN(numero)) {
            console.log('¡El número ingresado',numero, 'no es válido! Debe ser mayor a 100.');
            console.log('Por favor, ingresa un número mayor a 100: ');
        } else {
            console.log('¡Gracias! Has ingresado un número válido:', numero);
        }
    }

    verificarNumero(150); // Ejemplo de número válido
    verificarNumero(50);  // Ejemplo de número inválido
}

pedirNumero();
