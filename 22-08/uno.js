/*Consigna 1: Elaborar una función de javascript que reciba un string(texto plano) 
y devuelva un string encriptado.*/

//texto a encriptar y numero de posiciones a desplazar
function encriptarCesar(texto, desplazamiento) {
    let resultado = '';
    desplazamiento = desplazamiento % 26; // Asegurar que el desplazamiento esté dentro del rango del alfabeto
   
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        
        //Encriptar mayúsculas (A-Z). Verifica si es mayuscula en la tabla ASCII
        if (char >= 65 && char <= 90) {
            /*--------------> char - 65: conversion del codigo ASCII a un indice de 0 a 25 (correspondientes a 0 = 'A' y 25 = 'Z')
            ----------------> desplazamiento: se suma el desplazamiento
            ----------------> % 26: para asegurarse de que el resultado este dentro del rango del alfabeto (0 a 25)
            ----------------> + 65: conversion de indice a codigo ASCII
            ----------------> String.fromCharCode: conversion de codigo ASCII a un caracter*/
            resultado += String.fromCharCode(((char - 65 + desplazamiento) % 26) + 65);
        }
        //Encriptar minúsculas (a-z). Verifica si es minuscula en la tabla ASCII
        else if (char >= 97 && char <= 122) {
            resultado += String.fromCharCode(((char - 97 + desplazamiento) % 26) + 97);
        }
        //Mantener los caracteres no alfabéticos sin cambios(incluye espacios, numeros, signos de puntuacion, etc)
        else {
            resultado += texto[i];
        }
    }
    return resultado;
}
textoPlano = "Hola Mundo";
desplazamiento = 3;
textoCifrado = encriptarCesar(textoPlano, desplazamiento);
encriptarCesar(textoCifrado); // "Krod Pxqgr"

