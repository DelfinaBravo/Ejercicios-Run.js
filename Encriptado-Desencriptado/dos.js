/*Actividad: Crear una funcion con javascript para descubrir el siguiente mensaje encriptado:

crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv

*Pista: Es cifrado Cesar.*/

function descifrarCesar(textoCifrado, clave) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    // Crear un mapeo de caracteres a índices
    const mapeoIndices = {};
    
    for (let i = 0; i < abc.length; i++) {
      mapeoIndices[abc[i]] = i;
    }
  
    const textoCifradoLower = textoCifrado.toLowerCase(); // Convertir a minúsculas si es necesario
    let resultado = ''; // Inicializar una cadena vacía para almacenar el resultado
  
    for (let i = 0; i < textoCifradoLower.length; i++) {
      const caracter = textoCifradoLower[i];
      const índice = mapeoIndices[caracter];
  
      if (índice === undefined) {
        // Si el carácter no está en el abc, queda igual
        resultado += caracter;
      } else {
        // Aplicar la clave y ajustar para mantenernos dentro del rango de abc
        const nuevoIndice = (índice - clave + 26) % 26;
        resultado += abc[nuevoIndice];
      }
    }
  
    return resultado;
  }
  
  const mensajeCifrado = 'crjdrhlzerjgfuirercxleuzrgvejrigvifefcfyrireuvcrdzjdrdrevirhlvcfyrtvvcyfdsiv';
  const clave = 17;
  const mensajeDescifrado = descifrarCesar(mensajeCifrado, clave);
  
  console.log(mensajeDescifrado);
  
  