/*Actividad: Crear una funcion con javascript para descubrir el siguiente mensaje encriptado:

crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv

*Pista: Es cifrado Cesar.*/

function decifrarCifradoCesar(mensajeEncriptado) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const longitudAlfabeto = abc.length;

    // Función para descifrar con un desplazamiento específico
    function descifrarConDesplazamiento(mensaje, desplazamiento) {
        return mensaje.split('').map(letra => {
            let indiceActual = abc.indexOf(letra);
            if (indiceActual === -1) {
                return letra; // Si no es una letra del abc, la devolvemos tal cual
            }
            let nuevoIndice = (indiceActual - desplazamiento + longitudAlfabeto) % longitudAlfabeto;
            return abc[nuevoIndice];
        }).join('');
    }

    // Probar todos los posibles desplazamientos
    for (let desplazamiento = 1; desplazamiento < longitudAlfabeto; desplazamiento++) {
        let mensajeDescifrado = descifrarConDesplazamiento(mensajeEncriptado, desplazamiento);
        console.log(`Desplazamiento ${desplazamiento}: ${mensajeDescifrado}`);
    }
}

const mensajeEncriptado = "crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv";
decifrarCifradoCesar(mensajeEncriptado);

