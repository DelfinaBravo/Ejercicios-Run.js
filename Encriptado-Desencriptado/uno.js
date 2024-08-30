/*Actividad: Crear una funcion con javascript para descubrir el siguiente mensaje encriptado:

crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv

*Pista: Es cifrado Cesar.*/

function descifrarCesar(textoCifrado, clave) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    // Convertir a minúsculas si es necesario
    const textoCifradoLower = textoCifrado.toLowerCase(); 
    return textoCifradoLower.split('').map(caracter => {
        const indice = abc.indexOf(caracter);
        if (indice === -1) {
        // Si el caracter no está en el abc (espacios/signos de puntuación, etc), queda igual
            return caracter;
        }
        // Aplicar la clave y ajustar para mantenernos dentro del rango de abc
        const nuevoIndice = (indice - clave + 26) % 26;
        return abc[nuevoIndice];
    }).join('');
}
const mensajeCifrado = 'crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv';
const clave = 17;
const mensajeDescifrado = descifrarCesar(mensajeCifrado, clave);

console.log(mensajeDescifrado);