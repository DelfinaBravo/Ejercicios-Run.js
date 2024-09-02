function decifrarCifradoCesar(mensajeEncriptado) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'; 
    const longitudAbecedario = abc.length;

    // Función para descifrar con un desplazamiento específico
    function descifrarConDesplazamiento(mensaje, desplazamiento) {
        return mensaje.split('').map(letra => { // Dividir el mensaje en caracteres y mapear cada uno
            let indiceActual = abc.indexOf(letra); // Obtener el índice de la letra en el abecedario
            if (indiceActual === -1) {
                return letra; // Si no es una letra del abecedario, devolverla tal cual
            }
            let nuevoIndice = (indiceActual - desplazamiento + longitudAbecedario) % longitudAbecedario; // Calcular el nuevo índice con el desplazamiento
            return abc[nuevoIndice]; // Devolver la letra correspondiente al nuevo índice
        }).join(''); // Unir las letras descifradas en una cadena
    }

    // Probar todos los posibles desplazamientos
    for (let desplazamiento = 1; desplazamiento < longitudAbecedario; desplazamiento++) {
        let mensajeDescifrado = descifrarConDesplazamiento(mensajeEncriptado, desplazamiento); // Descifrar el mensaje con el desplazamiento actual
        // Invertir la cadena resultante para obtener el mensaje en forma de espejo
        let mensajeEspejo = mensajeDescifrado.split('').reverse().join(''); // Dividir, invertir y unir la cadena
        console.log(`Desplazamiento ${desplazamiento}: ${mensajeEspejo}`); // Imprimir el mensaje descifrado y en espejo
    }
}

// En la clave 23 se encuentra el mensaje que luego se obtiene en forma espejo
const mensajeEncriptado = "lwximldoxixplfoxkfaolxoqubplaxqirpboxoxsbiikbabrmxiaxaxzpxwfixbobrnpbqkbqpfpklzvplnbrnbmplfyjxzpli";
decifrarCifradoCesar(mensajeEncriptado);