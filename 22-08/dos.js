/*Consigna 2: Crear una función que desencripte el string de la consigna 1.*/

function desencriptarCesar(texto, desplazamiento) {
    let resultado = '';
    desplazamiento = desplazamiento % 26; // Asegurar que el desplazamiento esté dentro del rango del alfabeto
    
    for (let i = 0; i < texto.length; i++) {
        /*obtencion del codigo ASCII del caracter en la posicion 'i'*/
        let char = texto.charCodeAt(i);
        // Desencriptar mayúsculas (A-Z)
        if (char >= 65 && char <= 90) {
            /*--------> + 26: evita numeros negativos asegurando un resultado positivo,´
                              dentro del rango, antes de aplicar el modulo 
            ----------> % 26: se aplica el modulo para asegurarse de que el resultado este dentro del modulo
            ----------> + 65: conversion de indice a un codigo ASCII  */
            resultado += String.fromCharCode(((char - 65 - desplazamiento + 26) % 26) + 65);
        }
        // Desencriptar minúsculas (a-z)
        else if (char >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((char - 97 - desplazamiento + 26) % 26) + 97);
        }
        // Mantener los caracteres no alfabéticos sin cambios
        else {
            resultado += texto[i];
        }
    }
    return resultado;
}
let textoDescifrado = desencriptarCesar(textoCifrado, desplazamiento);
console.log(textoDescifrado); // "Hola Mundo"
